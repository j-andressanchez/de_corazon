<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <!-- Agrega más columnas según tus necesidades -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="insumo in insumos" :key="insumo.id">
            <td>{{ insumo.id }}</td>
            <td>{{ insumo.nombre }}</td>
            <td>{{ insumo.cantidad }} {{ insumo.medida }}</td>
            <!-- Agrega más celdas según tus necesidades -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      insumos: Array, // Propiedad para pasar la lista de insumos al componente
    },
  };
  </script>
  
  <style>
  /* Puedes agregar estilos personalizados aquí */
  </style>
  