<template>
  <main class="main main--centered">
    <div class="error">
      <h1 class="error__title">This is a<br/><span class="pink">{{ code }}</span> page</h1>
      <p class="error__msg">{{ message }}</p>
      <app-button title="Homepage" icon="home" @onClick="goBack"/>
    </div>
  </main>
</template>

<script>
import AppButton from '@/components/AppButton'

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
  components: { AppButton }
}
</script>

<style lang="sass">
.error
  width: 100%
  max-width: 300px

  &__title
    font-size: 50px
    line-height: 1

  &__msg
    margin: 40px 0
    font-size: 12px

  >.btn
    display: block
    margin: 0 auto
</style>
