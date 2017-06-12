<template>
  <div class="landing">
    <div class="options">
      <p class="options-title" @click="toggleOptions">Options <small>[{{optionOpen ? '-' : '+'}}]</small></p>
      <div v-show="optionOpen">
        <div class="options-field">
          <label>API Address</label>
          <input v-model="api">
        </div>
        <div class="options-field">
          <label>Tick</label>
          <input v-model="tick">
        </div>
        <button @click="apply">Apply</button>
      </div>
      <div class="api-status" v-show="apiStatus">{{apiStatus}}</div>
    </div>
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
        latest: {},
        api: this.$route.query.api || 'http://localhost:8000/statistics',
        tick: this.$route.query.tick || 1000,
        apiStatus: '',
        optionOpen: false
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      toggleOptions () {
        this.optionOpen = !this.optionOpen
      },
      fetchData () {
        this.$fetchInterval = setInterval(async () => {
          try {
            const res = await fetch(this.$route.query.api)
            const json = await res.json()
            this.latest = json
            this.apiStatus = 'API Server Connected'
          } catch (e) {
            this.apiStatus = e.toString()
          }
        }, this.$route.query.tick || 1000)
      },
      apply () {
        this.$router.push({ path: '/', query: { api: this.api, tick: this.tick }})
      }
    },
    beforeRouteUpdate (to, _, next) {
      next()
      this.api = to.query.api || 'http://localhost:8000/statistics'
      this.tick = to.query.tick >= 100 ? to.query.tick : 1000

      clearInterval(this.$fetchInterval)
      this.fetchData()
    }
  }
</script>

<style lang="scss">
  .landing {
    width: 600px;

    .options {
      padding-bottom: 30px;

      .options-title {
        color: #555;
        margin: 0 0 5px 0;
        cursor: pointer;
        display: inline-block;
      }

      .options-field {
        label {
          font-size: 12px;
          color: #888;
          display: inline-block;
          width: 80px;
        }

        input {
          width: 300px;
        }
      }
      button {
        margin: 10px 2px;
      }
      .api-status {
        font-size: 12px;
        padding: 5px 5px;
        border: solid 1px #eee;
        color: #888;
        margin-top: 10px;
      }
    }


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
