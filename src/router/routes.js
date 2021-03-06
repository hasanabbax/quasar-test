
const routes = [
  {
    path: '/',
    component: () => import('layouts/TestLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/hasan', component: () => import('pages/Hasan.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/login', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
