<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import new_data from "../services/data-service"

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
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
