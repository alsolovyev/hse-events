/**
 * Vuex module which stores common app settings
 */
const state = {
  theme: 'blue'
}

const getters = {
  getTheme: state => state.theme
}

const mutations = {
  SET_THEME: (state, value) => state.theme = value
}

const actions = {  }

export default { state, getters, mutations, actions }
