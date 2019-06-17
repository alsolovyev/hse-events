<template>
  <router-link class="link"
    :class="[{'link--colorized': colorized}, `link--${theme}`  ]"
    :to="to"
    :data-name="name">
    <span class="link__name">{{ name }}</span>
  </router-link>
</template>

<script>
/**
 * ToDo: add a class based on the theme color
 */
export default {
  name: 'AppLink',
  computed: {
    theme: function() { return this.$store.getters.getTheme }
  },
  props: {
    name: {
      type: String,
      default: 'Link'
    },
    to: {
      type: Object,
      default: () => { return { name: 'home' } }
    },
    colorized: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">
$link-transition: transform .3s

.link
  display: inline-block
  position: relative
  overflow: hidden

  &--colorized
    .link__name
      color: currentColor

  &--blue
    color: $blue

  &--pink
    color: $pink

  &--lime
    color: $lime

  &::after
    content: attr(data-name)
    position: absolute
    top: 100%
    left: 0
    +fix-blurry
    transition: $link-transition

  &__name
    display: inline-block
    color: $black
    +fix-blurry
    transition: $link-transition

  &.router-link-exact-active,
  &:hover
    &::after
      transform: translate3d(0, -100%, 0)
    .link__name
      transform: translate3d(0, -100%, 0)

</style>
