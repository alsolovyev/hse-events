import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

// begin Pages
import Home from '@/pages/Home'
import Auth from '@/pages/Auth'
import Events from '@/pages/Events'
import NotFound from '@/pages/NotFound'
// end Pages

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home, meta: { theme: 'blue' } },
    { path: '/auth', name: 'auth', component: Auth, meta: { theme: 'pink' } },
    { path: '/events', name: 'events', component: Events, meta: { theme: 'pink' } },
    { path: '*', name: '404', component: NotFound, meta: { theme: 'blue' } }
  ]
})

router.beforeEach((to, from, next) => {
  /** Change app theme*/
  store.commit('SET_THEME', to.meta.theme)
  next()
})

export default router
