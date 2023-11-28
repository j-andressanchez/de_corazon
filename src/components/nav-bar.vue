<template>
    <nav class="nav justify-content-center">
    <div class="container-fluid custom-navbar">
      <router-link v-for="tab in tabs" :key="tab.to" :to="tab.to" class="nav-link" :class="{ active: $route.path === tab.to }">{{ tab.label }}</router-link>
    </div>
    </nav>
  </template>
  
  <script>
    export default {
    data() {
        return {
        tabs: [
            {label: 'Home', to: '/home'},
            {label: 'Recetas', to: '/Recetas'},
            {label: 'Calculadora', to: '/calculadora'},
            {label: 'Tablas', to: '/tablas'},
            {label: 'Compras', to: '/Compras'},
            {label: 'Ventas', to: '/Ventas'},
        ],
        };
    },
    };
  </script>
  
  <style scoped>
.custom-navbar {
    background-color: #fadde2;
    margin: 0 auto;
    margin-top: 3px;
    margin-bottom: 30px;
    padding: 0;
    height: 40px;
    width: 60%;
    display: flex;
    justify-content: space-around;
}

.custom-navbar .nav-link {
    border-color: #692166;
    border: solid;
    border-width: 1px;
    background-color: #ffc0cb;
    padding: 10px 15px;
    color: #692166;
    border-radius: 0 0 10px 10px; 
    flex: 1;
    text-align: center;
}

.custom-navbar .nav-link.active {
    background-color: #ff66b2;
    border-color: #692166;
    color: #ffffff;
}

.custom-navbar .nav-link:hover {
    background-color: #ff66b2;
    border-color: #692166;
    color: #ffffff;
}
</style>