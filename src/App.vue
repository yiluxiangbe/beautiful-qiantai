<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/global.css'
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="less">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
</style>
