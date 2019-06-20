/* eslint-disable */
import Vue from 'vue'
// import maskString from './maskString'

export default const mask = {
  bind(el, binding, vnode) {
    const value = binding.expression || 'empty'

    el.oninput = function (event) {
      if (!event.isTrusted) return // avoid infinite loop

      // maskString('07021991', 'XX.XX.XX', {X: /\d/, S: /[1-2]/});
      // returns 07.02.1991

      // return masked value
    }
  }
}

Vue.directive('mask', mask)
