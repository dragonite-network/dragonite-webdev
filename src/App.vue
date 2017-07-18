<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  html, body {
    margin: 0;
    height: 100%;
  }

  #app {
    height: 100%;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
