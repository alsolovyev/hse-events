<template>
  <main class="main form">
    <!-- BEGIN Title -->
    <app-title title="Reset Password" subtitle="Account recovery"/>
    <!--END Title -->

    <p class="form__msg" ref="msg">
      Please enter your email address. We
      will send you an email to reset your password
    </p>

    <!-- BEGIN Form -->
    <form @submit.prevent="onSubmit" class="form__wrapper">
      <app-input v-for="(field, index) in fields" :key="index"
        ref="fields"
        :label="field.label"
        :type="field.type"
        :mask="field.mask"
        :placeholder="field.placeholder"
        @onChange="value => field.value = value"/>

      <!-- BEGIN Submit button -->
      <input type="submit">
      <!-- END Submit button -->
    </form>
    <!-- END Form -->

    <!-- BEGIN Links -->
    <ul class="form__links">
      <li class="form__link" v-for="(link, index) in links" :key="index" ref="links">
        <app-link
          :name="link.name"
          :to="link.to"/>
      </li>
    </ul>
    <!-- END Links -->

    <!-- BEGIN Button -->
    <div ref="btn">
      <app-button icon="enter" @onClick="onSubmit"/>
    </div>
    <!-- END Button -->
  </main>
</template>

<script>
import { TimelineLite } from 'gsap'
import AppTitle from '@/components/ui/AppTitle'
import AppLink from '@/components/ui/AppLink'
import AppInput from '@/components/ui/AppInput'
import AppButton from '@/components/ui/AppButton'

export default {
  name: 'Signin',
  data() {
    return {
      links: [
        { name: 'signin', to: { name: 'signin' } },
        { name: 'signup', to: { name: 'signup' } },
      ],
      fields: [
        { label: 'Email', type: 'email', mask: "", placeholder: "", value: null}
      ]
    }
  },
  methods: {
    /**
     * Submit form or press button
     */
    onSubmit() {
      this.$router.push({ name: 'reset-success', params: { email: this.fields[0].value } })
    }
  },
  mounted() {
    /**
     * Reveal animation
     */
    const fields = [],
          timeline = new TimelineLite({
            delay: .8,
            onComplete: () => {
              const input = document.getElementsByTagName('input')[0]
              if(input) input.focus()
            }
          })

    fields.push(this.$refs.msg)
    this.$refs.fields.map(field => fields.push(field.$el))
    fields.push(...this.$refs.links)
    fields.push(this.$refs.btn)

    timeline.staggerFromTo(fields, .3, { y: -20, autoAlpha: 0}, { y: 0, autoAlpha: 1}, .1)
  },
  components: { AppTitle, AppLink, AppInput, AppButton }
}
</script>

<style lang="sass">/* @/assets/sass/componenst/_form.sass */</style>
