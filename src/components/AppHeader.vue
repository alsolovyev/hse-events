<template>
  <header class="header">
    <!-- BEGIN Logo -->
    <router-link class="header__logo" title="Fu Awesome Icon"
      :to="{ name: 'home' }">
      <icon-rocket/>
    </router-link>
    <!-- END Logo -->

    <!-- BEGIN Nav -->
    <nav class="nav">
      <ul>
        <li class="nav__item"
          v-for="(link, index) in sortedLinks"
          :key="index">
          <app-link :name="link.name" :to="link.to"/>
        </li>
      </ul>
    </nav>
    <!-- END Nav -->
  </header>
</template>

<script>
import AppLink from '@/components/AppLink'
import IconRocket from '@/assets/icons/rocket.svg'

export default {
  name: 'AppHeader',
  data() {
    return {
      links: [
        { name: 'Home', to: { name: 'home' }, reqAuth: false },
        { name: 'Auth', to: { name: 'auth' }, reqAuth: false },
        { name: 'Events', to: { name: 'events' }, reqAuth: false }
      ]
    }
  },
  computed: {
    /**
     * Sort the list depending on the authorization status of the user
     */
    sortedLinks: function() { return this.links.filter(link => link) }
  },
  components: { AppLink, IconRocket }
}
</script>

<style lang="sass">
.header
  display: flex
  justify-content: space-between
  // align-items: center // ??????

  &__logo
    width: $logo-size
    height: $logo-size
    border-radius: 50%
    position: relative
    background: $grey
    >.icon
      width: 10px
      height: 10px
      +center
      opacity: .5

.nav
  line-height: 1

  &__item
    float: left
    margin-left: 10px
    font-size: 11px
    letter-spacing: .1em
    text-transform: uppercase
</style>
