  <template>
    <div id="app">
      <NavBar/>
      <router-view />
    </div>
  </template>

<script>
  import NavBar from './components/nav-bar.vue';

  export default {
    name: 'App',
    components:{
      NavBar,
    }
  }
</script>

<style>
  *{
    background-color: #F0E0EF;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>