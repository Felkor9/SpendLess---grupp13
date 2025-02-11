import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'

import AboutView from './views/AboutView.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})
