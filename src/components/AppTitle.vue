<template>
  <div class="head">
    <p class="head__subtitle"><span class="r-text" ref="subtitle">{{subtitle}}</span></p>
    <h1 class="head__title"><span class="r-text" ref="title">{{ title }}</span></h1>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'

export default {
  name: 'AppTitle',
  props: {
    title: {
      type: String,
      default: 'HSE Events title',
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    }
  },
  mounted() {
    const timeline = new TimelineLite({
      onStart: () => this.$refs.subtitle.parentElement.classList.add('js-show-lines')
    })
    timeline.fromTo(this.$refs.subtitle, .5, { y: '-100%' }, { y: '0%' }, '+=.2')
    timeline.fromTo(this.$refs.title, .5, { y: '-100%' }, { y: '0%' }, '-=.2')
  }
}
</script>

<style lang="sass">
.head
  text-align: center
  font-weight: 700
  &__subtitle
    $p: #{55px + 10}
    position: relative
    padding: 0 $p
    font-size: 10px
    line-height: 1
    overflow: hidden
    &::after,
    &::before
      content: ''
      width: 55px
      height: 1px
      margin-top: -1px
      position: absolute
      top: 50%
      background: currentColor
      transform: translate3d(0, 0, 0) scale3d(0, 1, 1)
      transition: transform .5s
      +br
    &::before
      left: 0
      transform-origin: right
    &::after
      right: 0
      transform-origin: left

    &.js-show-lines
      &::after,
      &::before
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1)

  &__title
    font-size: 40px
    line-height: 1.2
    overflow: hidden
</style>
