<template>
    <div class="container mt-4" style="width: 70%;">
      <h2 class="mb-4">Registrar Ventas</h2>
      <form @submit.prevent="registrarCompra">

        <div class="mb-3" style="width: 15%;">
          <label for="fechaSolicitud" class="form-label">Fecha de Solicitud:</label>
          <input type="date" id="fechaSolicitud" class="form-control" v-model="nuevaCompra.fechaSolicitud" required>
        </div>

        <!-- Sección 1: Información del Cliente -->
        <div class="mb-3">
            <h4>Información del Cliente</h4>
            <div class="row">
                <div class="col-md-6">
                    <label for="cliente" class="form-label">Cliente (Nombre):</label>
                    <input type="text" id="cliente" class="form-control" v-model="nuevaCompra.cliente" required>
                </div>
                <div class="col-md-3">
                    <label for="telefono" class="form-label">Teléfono:</label>
                    <input type="tel" id="telefono" class="form-control" v-model="nuevaCompra.telefono">
                </div>
                <div class="col-md-3">
                    <label for="direccion" class="form-label">Dirección:</label>
                    <input type="text" id="direccion" class="form-control" v-model="nuevaCompra.direccion">
                </div>            
            </div>
        </div>
  
        <!-- Sección 1: Información del Pedido -->
        <div class="mb-3">
            <h4>Información del Pedido</h4>
            <div class="row">
                <div class="col-md-1">
                    <label for="cantidad" class="form-label">Cantidad:</label>
                    <input type="number" id="cantidad" class="form-control" v-model="nuevaCompra.cantidad" required>
                </div>
                <div class="col-md-3">
                    <label for="producto" class="form-label">Producto:</label>
                    <input type="text" id="producto" class="form-control" v-model="nuevaCompra.producto" required>
                </div>
                <div class="col-md-4">
                    <label for="comentarios" class="form-label">Comentarios:</label>
                    <input type="text" id="comentarios" class="form-control" v-model="nuevaCompra.comentarios">
                </div>
                <div class="col-md-2">
                    <label for="precio" class="form-label">Precio:</label>
                    <input type="number" id="precio" class="form-control" v-model="nuevaCompra.precio" required>
                </div>
                <div class="col-md-2">
                    <label for="total" class="form-label">Total:</label>
                    <input type="text" id="total" class="form-control" v-model="total" readonly>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <label for="fechaEntrega" class="form-label">Fecha de Entrega:</label>
                    <input type="date" id="fechaEntrega" class="form-control" v-model="nuevaCompra.fechaEntrega" required>
                </div>
                <div class="col-md-3">
                    <label for="estadoPedido" class="form-label">Estado del Pedido:</label>
                    <select id="estadoPedido" class="form-select" v-model="nuevaCompra.estadoPedido" required>
                        <option value="pendiente">Pendiente</option>
                        <option value="anticipo">Anticipo</option>
                        <option value="pagado">Pagado</option>
                    </select>
                </div>
                <div v-if="nuevaCompra.estadoPedido === 'anticipo'" class="col-md-2">
                    <label for="valorAnticipo" class="form-label">Valor del Anticipo:</label>
                    <input type="number" id="valorAnticipo" class="form-control" v-model="nuevaCompra.valorAnticipo" required>
                </div>
                <div class="col-md-2">
                    <label for="saldoPendiente" class="form-label">Saldo Pendiente:</label>
                    <input type="text" id="saldoPendiente" class="form-control" v-model="saldoPendiente" readonly>
                </div>
            </div>
        </div>
  
        <!-- Opción para agregar varios productos -->
        <div class="mb-3">
          <label for="agregarVarios" class="form-check-label">Agregar Varios Productos:</label>
          <input type="checkbox" id="agregarVarios" class="form-check-input" v-model="nuevaCompra.agregarVarios">
        </div>
  
        <!-- Estado del pedido -->
          
        <!-- Campos adicionales para estado "pagado" -->
        
  
        <button type="submit" class="btn btn-custom">Registrar Compra</button>
      </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            nuevaCompra: {
                fechaSolicitud: '',
                cliente: '',
                telefono: '',
                direccion: '',
                fechaEntrega: '',
                cantidad: 0,
                producto: '',
                comentarios: '',
                precio: 0,
                total: 0,
                estadoPedido: 'pendiente',
                anticipo: 0,
                pago: 0,
                saldoPendiente: 0,
            },
        };
    },
    computed: {
        total() {
            return this.nuevaCompra.cantidad * this.nuevaCompra.precio;
        },
        saldoPendiente() {
            if (this.nuevaCompra.estadoPedido === 'pagado') {
                return 0;
            } else if (this.nuevaCompra.estadoPedido === 'anticipo') {
                return this.total - this.nuevaCompra.valorAnticipo;
            } else {
                return this.total;
            }
        },
    },
    methods: {
        registrarCompra() {
            // Aquí puedes enviar los datos al servidor o actualizar tu Gist
            // Puedes utilizar axios u otro método para realizar la operación
            console.log('Datos de la compra:', this.nuevaCompra);
        },
    },
};
</script>


<style scoped>
.btn-custom {
  background-color: #ffc0cb;
  border-color: #692166;
  color: #692166;
  margin-top: 15px;
}

.btn-custom:hover {
  background-color: #ff66b2;
  border-color: #692166;
  color: #ffffff;
}
</style>