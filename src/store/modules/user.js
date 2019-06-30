/**
 * User module
 */

/* eslint-disable */

import axios from 'axios'
import { USER_SIGNIN, USER_LOGOUT, USER_SIGNUP, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from './_variables'
import router from '@/router'
import Vue from 'vue'
import api from '@/config/api-endpoints'

/**
 * clearUserData
 * Remove unnecessary data from response object
 * @param {Object} data - response data from server
 * @return {Object}
 */
const clearUserData = data => Object.keys(data).reduce((obj, key) => {
                                if( key !== 'event' &&
                                    key !== 'token' &&
                                    key !== 'android_notification_token' &&
                                    key !== 'ios_notification_token') obj[key] = data[key]
                                return obj
                              }, {})

const state = {
  token     : localStorage.getItem('user-token') || '',
  authStatus: '',
  user      : null
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus:      state => state.authStatus,
  getUser:         state => state.user
}

const mutations = {
  [AUTH_REQUEST]: state => state.authStatus = 'loading',
  [AUTH_SUCCESS]: (state, {token, user}) => {
    state.authStatus = 'success'
    state.token      = token
    state.user       = user
  },
  [AUTH_ERROR]: state => state.authStatus = 'error',
  [AUTH_LOGOUT]: state => {
    state.authStatus = 'logged-out'
    state.token      = ''
    state.user       = null
  }
}

const actions = {
  [USER_SIGNIN]: ({commit, dispatch}, credentials) => new Promise((resolve, reject) => {
    commit(AUTH_REQUEST)
    axios.post(api.signin, credentials)
      .then(response => {
        // console.log(response.data)
        const token = response.data.token,
              user  = Object.keys(response.data).reduce((obj, key) => {
                        if( key !== 'event' &&
                            key !== 'token' &&
                            key !== 'android_notification_token' &&
                            key !== 'ios_notification_token') obj[key] = response.data[key]
                        return obj
                      }, {})

        // Save token
        localStorage.setItem('user-token', token)
        axios.defaults.headers.common['Authorization'] = `Token ${token}`

        // Save data to the store(vuex)
        commit(AUTH_SUCCESS, {token, user})

        resolve(user)
      })
      .catch(error => {
        // console.log(error)
        commit(AUTH_ERROR)
        reject(error.response)
      })
  }),

  [USER_LOGOUT]: ({commit}) => {
    // ToDo: remove token from server???

    // Set status to loading
    commit(AUTH_REQUEST)

    // Remove token
    localStorage.removeItem('user-token')
    delete axios.defaults.headers.common['Authorization']

    // Clear store(vuex)
    commit(AUTH_LOGOUT)

    // Show notification
    Vue.notify({
      type: 'success',
      title: 'Success',
      text: 'You are successfully logged out'
    })

    // Redirect user to the homepage
    router.push({ name: 'home' })
  },

  [USER_SIGNUP]: ({commit, dispatch}, credentials) => new Promise((resolve, reject) => {
    commit(AUTH_REQUEST)
    axios.post(api.signup, credentials)
      .then(response => {
        // Save token
        // localStorage.setItem('user-token', token)
        // axios.defaults.headers.common['Authorization'] = `Token ${token}`
        // Save data to the store(vuex)
        // commit(AUTH_SUCCESS, {token, user})
        resolve(response)
      })
      .catch(error => {
        commit(AUTH_ERROR)
        reject(error.response)
      })
  })
}

export default { state, getters, mutations, actions }
