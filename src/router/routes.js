const routes = [
  {
    path: '/login',
    component: () => import('pages/login')
  },
  {
    path: '/',
    component: () => import('layouts/default'),
    meta: {
      requiresAuth: true
    },
    children:
      [
        { path: '', component: () => import('pages/index') }
      ]
  },
  {
    path: '/cadastro',
    component: () => import('layouts/default'),
    meta: {
      requiresAuth: false
    },
    children:
      [
        { path: 'formUsuario', component: () => import('pages/usuarios/formUsuario.vue') }
      ]
  },
  {
    // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
export default routes
