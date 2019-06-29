<template>
  <div class="bg"></div>
</template>

<script>
export default {
  name: 'AppBackground'
}
</script>

<style lang="sass">
.bg
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: $white
  z-index: -9999

  &:after
    content: ''
    position: absolute
    top: $padding
    right: $padding
    bottom: $padding
    left: $padding
    border: $padding solid $grey

    +r(700)
      top: 0
      right: 0
      bottom: 0
      left: 0
</style>
