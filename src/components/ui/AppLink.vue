<template>
  <!-- BEGIN Internal link -->
  <router-link class="link"
    v-if="isInternal"
    :class="classes"
    :to="to"
    :data-name="name">
    <!-- BEGIN Label -->
    <span class="link__name"
      :data-name="name"
      :class="`link__name--${this.$store.getters.getTheme}`">{{ name }}</span>
    <!-- END Label -->
  </router-link>
  <!-- END Internal link -->

  <!-- BEGIN External link -->
  <a class="link"
    v-else
    target="_black"
    :class="classes"
    :href="href || 'https://alsolovyev.github.io/'">
    <!-- BEGIN Label -->
    <span class="link__name"
      :data-name="name"
      :class="`link__name--${this.$store.getters.getTheme}`">{{ name }}</span>
    <!-- END Label -->
  </a>
  <!-- END External link -->
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
    href: {
      type: String,
      default: 'https://alsolovyev.github.io/'
    },
    classes: {
      type: String,
      default: ''
    },
    isInternal: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="sass">
.link
  display: inline-block
  position: relative
  overflow: hidden

  &__name
    display: inline-block
    position: relative
    +fix-blurry
    transition: transform .3s

    &--blue
      &::after
        color: $blue
    &--pink
      &::after
        color: $pink
    &--lime
      &::after
        color: $lime

    &::after
      content: attr(data-name)
      position: absolute
      top: 100%
      left: 0
      +fix-blurry

  &.router-link-exact-active,
  &:focus,
  &:hover
    .link__name
      transform: translate3d(0, -100%, 0)
</style>
