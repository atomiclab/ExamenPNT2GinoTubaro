import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './components/Inicio.vue'
import ConversorDeUnidades from './components/ConversorDeUnidades/index.vue'
import RespuestaAPreguntas from './components/RespuestaAPreguntas.vue'

const routes = [
  /* ---- definición de la ruta raíz ---- */
  { path: '/', component: Inicio },
  { path: '/conversor-de-unidades', component: ConversorDeUnidades },
  { path: '/respuesta-a-preguntas', component: RespuestaAPreguntas },

  /* ---- definición de las rutas no existentes ---- */
  { path: '/:pathmatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
