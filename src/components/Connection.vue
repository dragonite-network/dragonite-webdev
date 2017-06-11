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
              <detail-item :label="'Send'" :value="data.send"></detail-item>
            </td>
            <td>
              <detail-item :label="'Recv'" :value="data.recv"></detail-item>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <detail-item :label="'SendRaw'" :value="data.sendraw"></detail-item>
            </td>
            <td>
              <detail-item :label="'RecvRaw'" :value="data.recvraw"></detail-item>
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
    created () {
      this.speedCalc()
    },
    methods: {
      toggle () {
        this.open = !this.open
      },
      speedCalc () {
        let prevUprate = 0
        let prevDownrate = 0
        setInterval(() => {
          let upBitps = this.data.sendraw - prevUprate
          let downBitps = this.data.recvraw - prevDownrate

          this.uprate = (upBitps / (1024 * 1024)).toFixed(2) + ' MB/s'
          this.downrate = (downBitps / (1024 * 1024)).toFixed(2) + ' MB/s'

          prevUprate = this.data.sendraw
          prevDownrate = this.data.recvraw
        }, 1000)
      }
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
