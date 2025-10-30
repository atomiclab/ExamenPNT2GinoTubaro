import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  /* ---- definición de la ruta raíz ---- */
  //{ path: '/', component: Binding },
  { path: '/', redirect: '/binding' },

  /* ---- definición de las rutas activas ---- */
  {
    path: '/binding',
    component: {
      template:
        '<div class="container mt-3"><h3>Binding</h3><p>Página inicial de ejemplo.</p></div>',
    },
  },
  /*    
    { path: '/binding', component: Binding },
    { path: '/estructura', component: Estructura },
    { path: '/atributos', component: Atributos },
    { path: '/formulario', component: Formulario },
    { path: '/contadores', component: Contadores },
    { path: '/http', component: Http },*/

  /* ---- definición de las rutas no existentes ---- */
  { path: '/:pathmatch(.*)*', redirect: '/binding' },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
