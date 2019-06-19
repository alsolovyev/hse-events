<template>
  <router-link class="link"
    :class="classes"
    :to="to"
    :data-name="name">
    <!-- BEGIN Label -->
    <span class="link__name"
      :data-name="name"
      :class="`link__name--${this.$store.getters.getTheme}`">{{ name }}</span>
    <!-- END Label -->
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
    classes: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">/* @/assets/sass/components/_link.sass */</style>
