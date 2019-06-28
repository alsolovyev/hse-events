<template>
  <button class="btn" @click="onClick">
    <component :is="icon"></component>
  </button>
</template>

<script>
import home from '@/assets/icons/home.svg'
import enter from '@/assets/icons/enter.svg'
import list from '@/assets/icons/list.svg'
import logout from '@/assets/icons/logout.svg'

export default {
  name: 'AppButton',
  methods: {
    /**
     * Button click handler
     */
    onClick() { this.$emit('onClick') }
  },
  props: {
    icon: {
      type: String,
      default: 'home'
    }
  },
  components: { home, enter, list, logout }
}
</script>

<style lang="sass">
.btn
  position: relative
  width: $btn-size
  height: $btn-size
  border-radius: 50%
  border: 5px solid $grey
  box-shadow: $btn-shadow
  background: $white
  transition: transform .3s, box-shadow .3s
  +hidetext

  >.icon
    width: $btn-icon-size
    height: $btn-icon-size
    +center

  &:focus,
  &:hover
    .icon
      fill: $blue

  &:active
    box-shadow: $btn-shadow-active
    transform: translate3d(0,5px,0)
</style>
