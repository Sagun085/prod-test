<template>
  <div id="app">
    {{ message.msg }}
  </div>
</template>

<script>
import new_data from "../services/data-service"

export default {
  name: 'App',
  data() {
    return {
      message: new_data
    }
  },
  mounted() {
    console.log("this is test mounteed")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
