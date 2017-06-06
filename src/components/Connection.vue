<template>
  <tbody class="connection">
    <tr @click="toggle">
      <td align="right">1</td>
      <!--Hash-->
      <td>123456</td>
      <!--Local Address-->
      <td>:0</td>
      <!--Remote Address-->
      <td>128.2.33.61</td>
      <!--Remarks-->
      <td>N/A</td>
      <!--Action-->
      <td></td>
    </tr>
    <tr v-if="open">
      <td colspan="6" class="detail">
        <table class="detail-table">
          <tr>
            <td width="50%">
              <detail-item></detail-item>
            </td>
            <td>

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
    data () {
      return {
        open: false
      }
    },
    methods: {
      toggle () {
        this.open = !this.open
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
