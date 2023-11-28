import { createRouter, createWebHashHistory } from 'vue-router';
import Calculadora from './components/calculadora-page.vue';
import Tables from './components/table-page.vue';
import Ventas from './components/compras-page.vue';

const routes = [
  { path: '/calculadora', component: Calculadora },
  { path: '/tablas', component: Tables },
  { path: '/ventas', component: Ventas },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
