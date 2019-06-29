<template>
  <div class="modal" ref="modal">
    <div class="modal__inner" data-text="software">
      <!-- BEGIN Line -->
      <span class="modal__line" ref="line"></span>
      <!-- END Line -->

      <!-- BEGIN Subtitle -->
      <p class="modal__subtitle"><span class="r-text" ref="subtitle">HSE Events software</span></p>
      <!-- END Subtitle -->

      <!-- BEGIN Title -->
      <h3 class="modal__title"><span class="r-text" ref="title">Mobile applications</span></h3>
      <!-- END Title -->

      <!-- BEGIN Text -->
      <p class="modal__descr" ref="desc">Download the <span class="pink">"HES Events"</span> mobile app. It's simple, fast and allows you to organize your schedule and communicate with events attendees effortlessly. With this application, you can view the news feed, ask questions, create and respond to polls and even more!</p>
      <!-- END Text -->

      <ul class="modal__list">
        <li class="modal__item"
          v-for="(link, index) in links" :key="index" :data-index="`0${index + 1}`">
          <!-- <a :href="link.href" class="pink">{{ link.name }}</a> -->
          <app-link :isInternal="false" classes="pink" :href="link.href" :name="link.name" />
        </li>
      </ul>
    </div>
    <!-- END Content -->

    <!-- BEGIN Button -->
    <div class="modal__btn" ref="btn" @click="closeModal(false)"></div>
    <!-- END Button -->
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'
import AppLink from '@/components/ui/AppLink'

export default {
  name: 'AppModal',
  data() {
    return {
      timeline: new TimelineLite({
        onReverseComplete: () => this.$store.commit('TOGGLE_MODAL')
      }),
      links: [
        { name: 'iOS', href: 'https://apps.apple.com/us/app/hes-events/id1437185003' },
        { name: 'Android', href: '' }
      ]
    }
  },
  methods: {
    /**
     * Close modal window
     */
    closeModal() {
      this.$refs.btn.classList.add('modal__btn--is-hidden')
      this.$refs.modal.classList.remove('modal--is-open')
      this.timeline.reverse()
    }
  },
  mounted() {
    // const timeline = new TimelineLite()
    this.timeline.fromTo(this.$refs.modal, .3, { autoAlpha: 0 }, { autoAlpha: 1})
    this.timeline.fromTo(this.$refs.line, .3, { scaleX: 0, transformOrigin:"right" }, { scaleX: 1})
    this.timeline.fromTo(this.$refs.subtitle, .5, { y: '-100%' }, { y: '0%' }, '-=0.2')
    this.timeline.fromTo(this.$refs.title, .5, { y: '-100%' }, { y: '0%',
                          onComplete: () => {
                            this.$refs.btn.classList.add('modal__btn--is-shown')
                            this.$refs.modal.classList.add('modal--is-open')
                          }
    }, '-=0.1')
    this.timeline.fromTo(this.$refs.desc, .5, { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=0.1')
    this.timeline.staggerFromTo(this.$refs.modal.querySelectorAll('.modal__item'), .5, { x: 20, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, .2, '-=0.3')
  },
  components: { AppLink }
}
</script>

<style lang="sass">
.modal
  display: flex
  justify-content: center
  align-items: center
  padding: $padding
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 1000
  overflow: hidden
  background: $dark
  color: $white

  &::before
    content: ''
    width: 90%
    max-width: 505px
    height: 200%
    +center
    z-index: 10
    border: 1px solid #000
    box-shadow: inset 0 0 0 0 #000
    transition: box-shadow .3s
    +prevent-user

  &--is-open
    &::before
      box-shadow: inset 0 0 20px 1px #000

  &::after
    content: 'Made with ♥ by janeRivas'
    position: absolute
    bottom: 2em
    left: 50%
    transform: translate(-50%, 0)
    font-size: 10px
    color: $white
    opacity: .1
    font-weight: lighter
    letter-spacing: .05em
    +prevent-user


  &__inner
    width: 100%
    max-width: $modal-width
    position: relative
    font-weight: 700

    &::before
      content: attr(data-text)
      width: 100%
      position: absolute
      top: 70px
      left: 50%
      transform: translate(-50%, 0)
      z-index: -1
      font: 700 90px/.8 'Poppins', sans-serif
      text-align: center
      color: rgba(9, 9, 9, .5)
      text-transform: uppercase
      pointer-events: none
      user-select: none

  &__line
    width: $title-line-width
    height: 1px
    margin-left: #{-$title-line-width - $title-line-margin}
    margin-top: 3px
    position: absolute
    top: 0
    left: 0
    background: currentColor
    // transform-origin: left

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
    margin: 0 auto 0 -3px
    font-size: 55px
    line-height: 1.2

  &__descr
    width: 100%
    max-width: #{$modal-width - 100}
    margin: 90px 0 50px auto
    text-align: right


  &__list
    float: right

  &__item
    margin: .8em 0
    position: relative
    line-height: 1

    &::before,
    &::after
      position: absolute
      top: 50%
      left: 0

    &::before
      content: attr(data-index)
      margin-left: -40px
      transform: translate(-100%, -50%) rotate(-90deg)
      font-size: 10px

    &::after
      content: ''
      width: 20px
      height: 1px
      margin-top: -1px
      margin-left: -30px
      background: currentColor
      +br



  &__btn
    position: fixed
    top: #{$padding * 2}
    right: #{$padding}
    cursor: pointer
    &::before,
    &::after
      content: ''
      position: absolute
      display: block
      top: 0
      right: 0
      width: 75px
      height: 35px
      background: $white
      transform: scale(0)

    &--is-shown
      &::after
        animation: showModalButtonUno .6s cubic-bezier(.64,.57,.67,1.53) forwards
      &::before
        animation: showModalButtonDos .6s cubic-bezier(.64,.57,.67,1.53) forwards

    &--is-hidden
      &::after
        animation: closeModalBtnUno .6s cubic-bezier(.64,.57,.67,1.53) forwards
      &::before
        animation: closeModalBtnDos .6s cubic-bezier(.64,.57,.67,1.53) forwards

@keyframes showModalButtonUno
  0%
    transform: rotate(0deg) scaleX(0)
  50%
    transform: rotate(0deg) scaleX(1)
  100%
    transform: rotate(45deg) scaleX(1)

@keyframes showModalButtonDos
  0%
    transform: rotate(0deg) scaleX(0)
  50%
    transform: rotate(0deg) scaleX(1)
  100%
    transform: rotate(-45deg) scaleX(1)

@keyframes closeModalBtnUno
  0%
    transform: rotate(45deg) scaleX(1)
  50%
    transform: rotate(0deg) scaleX(1)
  100%
    transform: rotate(0deg) scaleX(0)

@keyframes closeModalBtnDos
  0%
    transform: rotate(-45deg) scaleX(1)
  50%
    transform: rotate(0deg) scaleX(1)
  100%
    transform: rotate(0deg) scaleX(0)
</style>
