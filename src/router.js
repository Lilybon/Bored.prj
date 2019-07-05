import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mini-test',
      name: 'mini-test',
      component: () => import('./views/MiniTest.vue')
    },
    {
      path: '/stats-result',
      name: 'stats-result',
      component: () => import('./views/StatsResult.vue')
    },
    {
      path: '/find-act',
      name: 'find-act',
      component: () => import('./views/FindAct.vue')
    },
    {
      path: '/act-list',
      name: 'act-list',
      component: () => import('./views/ActList.vue')
    }
  ]
})
