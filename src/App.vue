<template>
  <div id="hes-events">
    <h1>HES Events: Hello</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: { }
}
</script>

<style lang="sass">
// REMOVE THIS !!!
#hes-events
  background: #181c21
  color: $white
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center

  h1
    position: relative
    &:after
      content: ''
      position: absolute
      right: -5px
      bottom: 0
      width: 10px
      height: 1px
      transform: translate(100%, -3px)
      background: $white
      animation: blinking-cursor 500ms linear infinite alternate

@keyframes blinking-cursor
  to
    opacity: 0
</style>
