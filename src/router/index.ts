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
      component: () => import("../views/Weight.vue"),
      props: true,
    },
    {
      path: '/Start',
      name: 'start',
      component: () => import("../views/Start.vue"),
      props: true,
    },
    {
      path: '/Restart',
      name: 'restart',
      component: () => import("../views/Restart.vue"),
      props: true,
    },
  ]
})

export default router
