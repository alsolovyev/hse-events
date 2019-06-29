/**
 * Vuex module which stores common app settings
 */
import { SET_THEME, TOGGLE_MODAL } from './_variables'

const state = {
  theme: 'blue',
  isModalOpen: false
}

const getters = {
  getTheme: state => state.theme,
  isModalOpen: state => state.isModalOpen
}

const mutations = {
  [SET_THEME]:    (state, value) => state.theme = value,
  [TOGGLE_MODAL]: (state, value) => value === undefined || typeof value !== "boolean"
      ? state.isModalOpen = !state.isModalOpen
      : state.isModalOpen = value
}

const actions = {  }

export default { state, getters, mutations, actions }
