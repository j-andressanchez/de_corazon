  <template>
    <img alt="Vue logo" src="./assets/logo.png" style="width: 150px; margin: 30px;">
    <mainPage></mainPage>
  </template>

<script>
  import mainPage from './components/main-page.vue'
  export default {
    name: 'App',
    components: {
      mainPage
    }
  }
</script>

<style>
  * {
    background-color: #F0E0EF;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
