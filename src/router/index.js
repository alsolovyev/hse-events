import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// begin Pages
import Home from '@/pages/Home'
// end Pages

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home',  component: Home, meta: {  } }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
