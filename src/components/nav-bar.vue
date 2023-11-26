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
  margin: 0 auto; /* Centra la barra en la pantalla */
  margin-top: 3px;
  margin-bottom: 30px;
  padding: 0;
  height: 40px;
  width: 60%;
  display: flex;
  justify-content: space-around; /* Distribuye las pestañas de manera uniforme */
}

.custom-navbar .nav-link {
  border: solid;
  background-color: #ffc0cb;
  padding: 10px 15px; /* Ajusta el espaciado interno de la pestaña */
  color: #692166;
  border-radius: 0 0 10px 10px; 
  flex: 1; /* Hace que cada pestaña ocupe la misma cantidad de espacio */
  text-align: center; /* Centra el texto horizontalmente */
}

.custom-navbar .nav-link.active {
  background-color: #eb4ece; /* Color de fondo al estar activo */
  border-color: #ff00ff; /* Borde de color fucsia */
  color: #ffffff !important; /* Usa !important para sobrescribir estilos predeterminados */
}

.custom-navbar .nav-link:hover {
  background-color: #ff66b2; /* Color de fondo al hacer hover */
  border-color: #ff00ff; /* Borde de color fucsia en hover */
  color: #ffffff !important; /* Usa !important para sobrescribir estilos predeterminados */
}
</style>