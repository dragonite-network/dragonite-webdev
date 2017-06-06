<template>
  <div class="landing">
    <table class="connection-table">
      <tr>
        <th align="right">#</th>
        <th align="left">Hash</th>
        <th align="left">Local Address</th>
        <th align="left">Remote Address</th>
        <th align="left">Remarks</th>
        <th align="left">Action</th>
      </tr>
      <connection></connection>
    </table>
  </div>
</template>

<script>
  import Connection from './Connection'
  export default {
    components: {Connection},
    name: 'landing',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  .landing {
    width: 600px;

    .connection-table {
      font-size: 12px;

      border-collapse: collapse;
      color: #888;
      width: 100%;


      th {
        font-weight: normal;
        padding: 8px 5px 8px 5px;
      }

      > tr {
        border-bottom: solid 1px #e2e2e2;
      }
    }
  }
</style>
