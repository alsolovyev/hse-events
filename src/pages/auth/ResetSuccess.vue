<template>
  <main class="main form">
    <!-- BEGIN Title -->
    <app-title title="Success" subtitle="Account recovery"/>
    <!--END Title -->

    <p ref="msg">
      HSE Events will send a verification
      message to <span class="pink">{{ email }}</span>
    </p>

    <!-- BEGIN Button -->
    <div ref="btn">
      <app-button icon="home" @onClick="onBtnClick"/>
    </div>
    <!-- END Button -->
  </main>
</template>

<script>
import { TimelineLite } from 'gsap'
import AppTitle from '@/components/ui/AppTitle'
import AppButton from '@/components/ui/AppButton'

export default {
  name: 'ResetSuccess',
  data() {
    return {
      email: ''
    }
  },
  mounted() {
    /**
     * Reveal animation
     */
    const fields = [],
          timeline = new TimelineLite({
            delay: .8
          })
    fields.push(this.$refs.msg)
    fields.push(this.$refs.btn)
    timeline.staggerFromTo(fields, .3, { y: -20, autoAlpha: 0}, { y: 0, autoAlpha: 1}, .1)

    /**
     * Hide email address
     */
    const email = this.$route.params.email || 'exmaple@mail.com',
          a     = email.indexOf('@'),
          b     = email.lastIndexOf('.')

    for(let i = 0; i < email.length; i++) {
      if (i > 2 && i < a || i > a + 2 && i < b) {
        this.email += "*";
      } else {
        this.email += email[i];
      }
    }
  },
  methods: {
    onBtnClick() { this.$router.push({ name: 'home' }) }
  },
  components: { AppTitle, AppButton }
}
</script>

<style lang="sass" scoped>
p
  width: 100%
  max-width: 300px
  font-size: 12px
  margin: 20px 0 30px 0
  text-align: center
</style>
