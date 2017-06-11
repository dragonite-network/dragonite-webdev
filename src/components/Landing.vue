<template>
  <div class="landing">
    <table class="connection-table">
      <tr>
        <th align="right">#</th>
        <th align="left">Desc</th>
        <th align="left">RemoteAddr</th>
        <th align="left">RTT</th>
        <th align="left">Upload Rate</th>
        <th align="left">Download Rate</th>
        <th align="left">Action</th>
      </tr>
      <connection v-for="(conn, index) in latest.connections" :key="index" :index="index" :data="conn"></connection>
    </table>
  </div>
</template>

<script>
  import Connection from './Connection'
  export default {
    components: {Connection},
    name: 'landing',
    data () {
      return {
        latest: {}
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        setInterval(async () => {
          const data = (await fetch(this.$route.query.api)).json()
          this.latest = data
        }, this.$route.query.tick || 1000)
      }
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
