import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainView from '@/views/MainView.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'MainView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Content.vue')
    }
  ]
})

export default router;
