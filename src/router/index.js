import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

// begin Pages
import Home from '@/pages/Home'
import Signin from '@/pages/Signin'
import Signup from '@/pages/Signup'
import Events from '@/pages/Events'
import ErrorPage from '@/pages/Error'
// end Pages

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home, meta: { theme: 'pink' } },
    { path: '/signin', name: 'signin', component: Signin, meta: { theme: 'blue' } },
    { path: '/signup', name: 'signup', component: Signup, meta: { theme: 'blue' } },
    { path: '/events', name: 'events', component: Events, meta: { theme: 'lime' } },
    { path: '*', name: 'error', component: ErrorPage, meta: { theme: 'blue' } }
  ]
})

router.beforeEach((to, from, next) => {
  /** Change app theme*/
  store.commit('SET_THEME', to.meta.theme)
  next()
})

export default router
