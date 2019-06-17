<template>
  <a class="link" v-if="external" :href="url">
    <span class="link__name" :data-name="name">{{ name }}</span>
  </a>
  <router-link class="link" v-else :to="to">
    <span class="link__name" :data-name="name">{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    name: {
      type: String,
      default: 'Link'
    },
    external: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: 'http://google.com'
    },
    to: {
      type: Object,
      default: () => { return { name: 'Home' } }
    }
  }
}
</script>

<style lang="sass">
.link
  overflow: hidden
  +check

  &--blue
    .link__name::after
      color: $blue

  &--pink
    .link__name::after
      color: $pink

  &__name
    position: relative
    display: inline-block
    transition: transform .3s
    +fix-blurry

    &::after
      content: attr(data-name)
      position: absolute
      top: 100%
      left: 0
      transform: translateZ(0)
      +fix-blurry

  &:hover
    .link__name
      transform: translate3d(0, -100%, 0)
</style>
