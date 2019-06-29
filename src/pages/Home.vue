<template>
  <main class="main hero">
    <div class="hero__inner">
      <!-- BEGIN Title -->
      <span class="hero__line" ref="line"></span>
      <p class="hero__subtitle"><span class="r-text" ref="subtitle">now about business</span></p>
      <h1 class="hero__title"><span class="r-text" ref="title">HSE Events</span></h1>
      <!-- END Title -->

      <!-- BEGIN Description -->
      <p class="hero__descr" ref="desc">HES Events Forum is the leading venue to discuss topical issues of the industry. During the Forum industry leaders make their decisions that provide direct impact on formation of the global gas market</p>
      <div class="hero__bg">HSE Events</div>
      <!-- END Description -->

      <!-- BEGIN Grid -->
      <app-grid ref="grid" :items="sortedLinks"/>
      <!-- END Grid -->
    </div>
  </main>
</template>

<script>
import { TimelineLite } from 'gsap'
import AppGrid from '@/components/ui/AppGrid'

export default {
  name: 'Home',
  data() {
    return {
      links: [
        { name: 'Sign up', reqAuth: false, to: { name: 'signup' }, description: 'Create a HES Events account'},
        { name: 'Sign in', reqAuth: false, to: { name: 'signin' }, description: 'Already have an account?'},
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
  mounted() {
    const timeline = new TimelineLite({ })
    timeline.fromTo(this.$refs.line, .4, { scaleX: 0, transformOrigin:"right" }, { scaleX: 1})
    timeline.fromTo(this.$refs.subtitle, .4, { y: '-100%' }, { y: '0%' }, '-=0.2')
    timeline.fromTo(this.$refs.title, .4, { y: '-100%' }, { y: '0%' }, '-=0.2')
    timeline.fromTo(this.$refs.desc, .5, { x: 20, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, '-=0.3')
    timeline.staggerFromTo(this.$refs.grid.$refs.cell, .5, { x: -20, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, .05, '-=0.3')
  },
  components: { AppGrid }
}
</script>

<style lang="sass">
.hero
  display: flex
  justify-content: center
  align-items: center

  &__inner
    width: 100%
    max-width: $content-width
    padding: $padding
    margin: $padding
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
    width: $title-line-width
    height: 1px
    margin-left: #{-$title-line-width - $title-line-margin}
    margin-top: 3px
    +br
    position: absolute
    top: $padding
    left: $padding
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
