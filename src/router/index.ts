import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/Home.vue")
    },
    {
      path: '/Weight',
      name: 'weight',
      component: () => import("../views/Weight.vue")
    },
    {
      path: '/Start',
      name: 'start',
      component: () => import("../views/Start.vue")
    },
    {
      path: '/Restart',
      name: 'restart',
      component: () => import("../views/Restart.vue")
    },
  ]
})

export default router
