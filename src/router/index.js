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

const isAuth = (to, from, next) => store.getters.getStatus === 'logged-in' && store.getters.getUser.email.split('@')[0] === to.params.username ? next() : next({ name: 'error' })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',              name: 'home',          component: Home,          meta: { theme: 'pink' } },
    { path: '/signin',        name: 'signin',        component: Signin,        meta: { theme: 'blue' } },
    { path: '/signup',        name: 'signup',        component: Signup,        meta: { theme: 'blue' } },
    { path: '/reset',         name: 'reset',         component: ResetPassword, meta: { theme: 'blue' } },
    { path: '/reset/success', name: 'reset-success', component: ResetSuccess,  meta: { theme: 'blue' } },
    { path: '/events',        name: 'events',        component: Events,        meta: { theme: 'lime' } },
    { path: '/event/:id',     name: 'event',         component: Event,         meta: { theme: 'lime' } },
    { path: '/:username',     name: 'dashboard',     component: Dashboard,     meta: { theme: 'pink' }, beforeEnter: isAuth },
    { path: '/error',         name: 'error',         component: ErrorPage,     meta: { theme: 'blue' }, alias: '*' }
  ]
})

/** Check if user is already signed in */
const storeInit = store.dispatch('USER_INIT')

router.beforeEach((to, from, next) => {
  storeInit.then(() => {
    /** Change app theme */
    store.commit('SET_THEME', to.meta.theme)
    next()
  })
})

export default router
