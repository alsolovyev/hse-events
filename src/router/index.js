import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

// begin Pages
import Home from '@/pages/Home'
// end Pages

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home',  component: Home, meta: { theme: 'pink' } }
  ]
})

router.beforeEach((to, from, next) => {
  /** Change app theme*/
  store.commit('SET_THEME', to.meta.theme)
  next()
})

export default router
