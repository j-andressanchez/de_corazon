<template>
    <div>
      <button type="button" class="btn btn-custom" @click="showInsumos">Mostrar Insumos</button>
      <button type="button" class="btn btn-custom" @click="showHerramientas">Mostrar Herramientas</button>
  
      <div v-if="showTable">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Medida</th>
              <th>Valor</th>
              <th>Distribuidor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableData" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.cantidad }}</td>
              <td>{{ item.medida }}</td>
              <td>{{ item.valor }}</td>
              <td>{{ item.distribuidor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showTable: false,
        gistData: null,
        tableData: null,
        gistId: 'c357027017db918429dd3986bb96dc97',
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await this.$axios.get(`https://api.github.com/gists/${this.gistId}`);
          this.gistData = response.data.files['gistfile1.txt'].content;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      },
      showInsumos() {
        this.showTable = true;
        if (this.gistData) {
            try {
            const parsedContent = JSON.parse(this.gistData);
            this.tableData = parsedContent.Insumos;
            } catch (error) {
            console.error('Error parsing content:', error);
            throw error;
            }
        } else {
            console.error('Gist data is not available.');
        }
        },
      async showHerramientas() {
        this.showTable = true;
        if (this.gistData) {
            try {
            const parsedContent = JSON.parse(this.gistData);
            this.tableData = parsedContent.Herramientas;
            } catch (error) {
            console.error('Error parsing content:', error);
            throw error;
            }
        } else {
            console.error('Gist data is not available.');
        }
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style scoped>
    .btn-custom {
        background-color: #ffc0cb;
        border-color: #692166;
        color: #692166;
        margin: 20px 10px;
    }
    
    .btn-custom:hover {
        background-color: #ff66b2;
        border-color: #692166;
        color: #ffffff;
    }

    table {
        margin: auto;
    }

    /* Estilo para el encabezado con el color rosa pastel */
    thead {
        background-color: #ffc0cb;
    }

    /* Estilo para las filas alternando entre blanco y rosa bebé */
    tbody tr:nth-child(even) {
        background-color: #ffffff; /* Blanco */
    }

    tbody tr:nth-child(odd) {
        background-color: #ffb6c1; /* Rosa bebé */
    }

    /* Estilos adicionales para las celdas y bordes, ajusta según tu preferencia */
    th, td {
        padding: 10px;
        border: 1px solid #692166;
    }
</style>
  