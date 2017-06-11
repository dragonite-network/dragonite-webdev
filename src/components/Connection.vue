<template>
  <tbody class="connection">
    <tr @click="toggle">
      <th align="right">{{index}}</th>
      <th align="left">{{data.description}}</th>
      <th align="left">{{data.remote}}</th>
      <th align="left">{{data.rtt}}</th>
      <th align="left">{{uprate}}</th>
      <th align="left">{{downrate}}</th>
      <th align="left">N/A</th>
    </tr>
    <tr v-if="open">
      <td colspan="7" class="detail">
        <table class="detail-table">
          <tr>
            <td width="50%">
              <detail-item :label="'RTT'" :value="data.rtt" :unit="'ms'"></detail-item>
            </td>
            <td>
              <detail-item :label="'DevRTT'" :value="data.devrtt" :unit="'ms'"></detail-item>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <detail-item :label="'Send'" :value="formatDataSize(data.send).text"></detail-item>
            </td>
            <td>
              <detail-item :label="'Recv'" :value="formatDataSize(data.recv).text"></detail-item>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <detail-item :label="'SendRaw'" :value="formatDataSize(data.sendraw).text"></detail-item>
            </td>
            <td>
              <detail-item :label="'RecvRaw'" :value="formatDataSize(data.recvraw).text"></detail-item>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <detail-item :label="'SendPkt'" :value="data.sendpkt"></detail-item>
            </td>
            <td>
              <detail-item :label="'RecvCount'" :value="data.recvcount"></detail-item>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <detail-item :label="'Resend'" :value="data.resend"></detail-item>
            </td>
            <td>
              <detail-item :label="'Dup'" :value="data.dup"></detail-item>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</template>

<script>
  import DetailItem from './DetailItem'
  import { formatDataSize } from '../utils/data_size_formater'
  export default {
    components: {DetailItem},
    name: 'connection',
    props: ['data', 'index'],
    data () {
      return {
        open: false,
        uprate: 'N/A',
        downrate: 'N/A'
      }
    },
    watch: {
      data (data, oldData) {
        let upDiff = data.sendraw - oldData.sendraw
        let downDiff = data.recvraw - oldData.recvraw

        this.uprate = formatDataSize(upDiff).text + '/s'
        this.downrate = formatDataSize(downDiff).text + '/s'
      }
    },
    methods: {
      toggle () {
        this.open = !this.open
      },
      formatDataSize
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .connection {
    color: #666;
    border-bottom: solid 1px #e2e2e2;

    td {
      padding: 12px 5px;
    }

    .detail {
      border-top: solid 1px #f3f3f3;

      .detail-table {
        width: 100%;
      }
    }
  }
</style>
