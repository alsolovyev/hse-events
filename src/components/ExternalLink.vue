<template>
  <a class="link"
    target="_black"
    :class="classes"
    :href="href || 'https://alsolovyev.github.io/'">
    <!-- BEGIN Label -->
    <span class="link__name"
      :data-name="name"
      :class="`link__name--${this.$store.getters.getTheme}`">{{ name }}</span>
    <!-- END Label -->
  </a>
</template>

<script>
/**
 * ToDo: add a class based on the theme color
 */
export default {
  name: 'ExternalLink',
  computed: {
    theme: function() { return this.$store.getters.getTheme }
  },
  props: {
    name: {
      type: String,
      default: 'Link'
    },
    href: {
      type: String,
      default: 'https://alsolovyev.github.io/'
    },
    classes: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">/* @/assets/sass/components/_link.sass */</style>
