import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

// BEGIN Pages
import Home from '@/pages/Home'
import Signin from '@/pages/auth/Signin'
import Signup from '@/pages/auth/Signup'
import ResetPassword from '@/pages/auth/ResetPassword'
import ResetSuccess from '@/pages/auth/ResetSuccess'
import Events from '@/pages/Events'
import Dashboard from '@/pages/Dashboard'
import Event from '@/pages/Event'
import ErrorPage from '@/pages/Error'
// END Pages

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',              name: 'home',          component: Home,          meta: { theme: 'pink' } },
    { path: '/signin',        name: 'signin',        component: Signin,        meta: { theme: 'blue' } },
    { path: '/signup',        name: 'signup',        component: Signup,        meta: { theme: 'blue' } },
    { path: '/reset',         name: 'reset',         component: ResetPassword, meta: { theme: 'blue' } },
    { path: '/reset/success', name: 'reset-success', component: ResetSuccess,  meta: { theme: 'blue' } },
    { path: '/events',        name: 'events',        component: Events,        meta: { theme: 'lime' } },
    { path: '/event/:id',     name: 'event',         component: Event,         meta: { theme: 'lime' } },
    { path: '/:username',     name: 'dashboard',     component: Dashboard,     meta: { theme: 'pink' } },
    { path: '/error',         name: 'error',         component: ErrorPage,     meta: { theme: 'blue' }, alias: '*' }
  ]
})

router.beforeEach((to, from, next) => {
  /** Change app theme */
  store.commit('SET_THEME', to.meta.theme)
  next()
})

export default router
