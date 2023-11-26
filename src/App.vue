<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <testPage></testPage>
</template>

<script>
  import testPage from './components/test-page.vue'
  export default {
    name: 'App',
    components: {
      testPage
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
