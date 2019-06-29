<template>
  <main class="main error">
    <!-- BEGIN Error -->
    <div class="error__inner" :data-code="code">
      <h1 class="error__title" ref="title">
        This is a<br/><span class="pink">{{ code }}</span> page
      </h1>
      <p class="error__msg" ref="msg" v-html="message"></p>

      <!-- BEGIN Button -->
      <div ref="btn">
        <app-button title="Homepage" icon="home" @onClick="goBack"/>
      </div>
      <!-- END Button -->
    </div>
    <!-- END Error -->
  </main>
</template>

<script>
import { TimelineLite } from 'gsap'
import AppButton from '@/components/ui/AppButton'

export default {
  name: 'Error',
  data() {
    return {
      code: '404',
      message: 'You are here because you clicked a dead link or typed something stupid into the address bar.'
    }
  },
  methods: {
    /**
     * Bring a user back where he came from.
     */
    goBack() {
      // this.$router.go(-1) // go back
      this.$router.push({ name: 'home' }) // go homepage
      // console.log(this.$router.options)
    }
  },
  beforeMount() {
    /**
     * Check if parameters were passed
     * ToDo:
     *  - make more beautiful ¯\_(ツ)_/¯
     */
    if(this.$route.params.code) this.code = this.$route.params.code
    if(this.$route.params.message) this.message = this.$route.params.message
    if(this.$route.query.code) this.code = this.$route.query.code
    if(this.$route.query.message) this.message = this.$route.query.message
    // console.log('Params: ', this.$route.params)
    // console.log('Query: ', this.$route.query)
  },
  mounted() {
    const els = [this.$refs.title, this.$refs.msg, this.$refs.btn],
          timeline = new TimelineLite()

    timeline.staggerFromTo(els, .5, { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, .2)
  },
  components: { AppButton }
}
</script>

<style lang="sass">
.error
  display: flex
  justify-content: center
  align-items: center

  &__inner
    position: relative
    width: 100%
    max-width: 300px
    text-align: center

    &::before
      content: attr(data-code)
      // width: 100%
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      z-index: -1
      font: 700 300px/.8 'Poppins', sans-serif
      color: $grey
      pointer-events: none
      user-select: none

  &__title
    font-size: 50px
    line-height: 1

  &__msg
    margin: 40px 0
    font-size: 12px
    br
      line-height: 3em
</style>
