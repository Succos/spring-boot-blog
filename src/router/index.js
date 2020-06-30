import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    name: 'layout',
    component: () => import('@/views/layouts/index'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index/index')
      },
      {
        path: '/type',
        name: 'Type',
        component: () => import('@/views/type/index')
      },
      {
        path: '/timeLine',
        name: 'TimeLine',
        component: () => import('@/views/time-line/index')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index')
      },
      {
        path: '/info/:id',
        name: 'Info',
        component: () => import('@/views/blog/index')
      },
      {
        path: '/adout',
        name: 'About',
        component: () => import('@/views/about/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
