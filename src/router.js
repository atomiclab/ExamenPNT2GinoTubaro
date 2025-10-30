import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './components/Inicio.vue'

const routes = [
  /* ---- definición de la ruta raíz ---- */
  { path: '/', component: Inicio },

  /* ---- definición de las rutas activas ---- */
  {
    path: '/conversor-de-unidades',
    component: {
      template:
        '<div class="container mt-3"><h3>Conversor de Unidades</h3><p>Página de conversor de unidades.</p></div>',
    },
  },

  /* ---- definición de las rutas no existentes ---- */
  { path: '/:pathmatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
