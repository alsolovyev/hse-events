<template>
  <main class="main main--centered">
    <div class="hero">
      <span class="hero__line"></span>
      <h2 class="hero__subtitle"><span>now about business</span></h2>
      <h1 class="hero__title"><span>HSE Events</span></h1>
      <p class="hero__descr">HES Events Forum is the leading venue to discuss topical issues of the industry. During the Forum industry leaders make their decisions that provide direct impact on formation of the global gas market</p>
      <div class="hero__bg">HSE Events</div>
      <flex-grid :items="sortedLinks"/>
    </div>
  </main>
</template>

<script>
import FlexGrid from '@/components/FlexGrid'

export default {
  name: 'Home',
  data() {
    return {
      links: [
        { name: 'Sign up', reqAuth: false, to: { name: 'auth' }, description: 'Create a HES Events account'},
        { name: 'Sign in', reqAuth: false, to: { name: 'auth' }, description: 'Already have an account?'},
        { name: 'Events',   reqAuth: false, to: { name: 'events' }, description: 'Learn more about ongoing events'}
      ]
    }
  },
  computed: {
    /**
     * Sort the list depending on the authorization status of the user
     */
    sortedLinks: function() { return this.links.filter(link => link) }
  },
  components: { FlexGrid }
}
</script>

<style lang="sass">
.hero
  width: 100%
  max-width: $content-width
  padding: $padding
  position: relative

  &::before,
  &::after
    content: ''
    position: absolute
    z-index: -1

  &::before
    width: 100px
    height: 100px
    bottom: #{-$padding}
    left: #{-$padding}
    background-image: $linear-gradient, $linear-gradient
    background-position: 0 0, $padding 100%
    background-size: $padding 102.5%, 100% $padding
    background-repeat: repeat-y, no-repeat

  &::after
    width: 100%
    max-width: 200px
    height: 75%
    top: #{-$padding}
    right: #{-$padding}
    background-image: $linear-gradient, $linear-gradient
    background-position: 100% 0, 100% $padding
    background-size: 102.8% $padding, $padding 100%
    background-repeat: repeat-x, no-repeat

  &__line
    display: block
    width: 55px
    height: 1px
    margin-left: -55px
    +br
    position: absolute
    top: #{$padding + 4}
    left: #{$padding / 2}
    background: currentColor

  &__subtitle,
  &__title
    font-weight: 700
    overflow: hidden


  &__subtitle
    font-size: 10px
    line-height: .9
    letter-spacing: .1em
    text-transform: uppercase

  &__title
    margin-top: 5px
    margin-left: -3px
    font-size: 55px
    line-height: .9

  &__descr
    width: 66.6666%
    margin-top: 90px
    margin-bottom: 50px
    margin-left: auto
    font-size: 12px
    text-align: right

  &__bg
    width: 100%
    position: absolute
    top: 70px
    left: 50%
    transform: translate(-50%, 0)
    z-index: -1
    font: 700 90px/.8 'Poppins', sans-serif
    letter-spacing: -4px
    text-align: center
    color: $grey
    text-transform: lowercase
    pointer-events: none
    user-select: none

</style>
