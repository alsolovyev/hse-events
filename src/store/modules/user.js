/**
 * User module
 */

/* eslint-disable */

import axios from 'axios'
import { USER_SIGNIN, USER_LOGOUT, USER_SIGNUP, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from './_names'
import api from '@/config/api'

const state = {
  token: localStorage.getItem('user-token') || '',
  authStatus: '',
  user: null
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
    state.token = token
    state.user = user
  },
  [AUTH_ERROR]: state => state.authStatus = 'error'
}

const actions = {
  [USER_SIGNIN]: ({commit, dispatch}, credentials) => new Promise((resolve, reject) => {
    commit(AUTH_REQUEST)
    axios.post(api.signin, credentials)
      .then(response => {
        console.log(response.data)
        const token = response.data.token,
              user  = Object.keys(response.data).reduce((obj, key) => {
                        if( key !== 'event' &&
                            key !== 'token' &&
                            key !== 'android_notification_token' &&
                            key !== 'ios_notification_token') obj[key] = response.data[key]
                        return obj
                      }, {})

        localStorage.setItem('token', token)

        commit(AUTH_SUCCESS, {token, user})

        axios.defaults.headers.common['Authorization'] = token

        resolve(user)
      })
      .catch(error => {
        console.log(error)
        commit(AUTH_ERROR)
        reject(error.response)
      })
  })
}

export default { state, getters, mutations, actions }
