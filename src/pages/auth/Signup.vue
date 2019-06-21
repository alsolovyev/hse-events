<template>
  <main class="main main--centered main--column">
    <!-- BEGIN Title -->
    <app-title title="Create account" subtitle="welcome to hse events"/>
    <!--END Title -->

    <!-- BEGIN Form -->
    <form @submit.prevent="onSubmit" class="form">
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
import AppTitle from '@/components/AppTitle'
import AppLink from '@/components/AppLink'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'

export default {
  name: 'Signup',
  data() {
    return {
      links: [
        { name: 'signin',         to: { name: 'signin' } },
        { name: 'reset password', to: { name: 'reset' } },
      ],
      fields: [
        { label: 'First name',  type: 'text',     mask: "",     placeholder: "",           value: null},
        { label: 'Last name',   type: 'text',     mask: "",     placeholder: "",           value: null},
        { label: 'Email',       type: 'email',    mask: "",     placeholder: "",           value: null},
        { label: 'Birthday',    type: 'text',     mask: "date", placeholder: "12.31.2019", value: null},
        { label: 'Password',    type: 'password', mask: "",     placeholder: "",           value: null},
        { label: 'Re-password', type: 'password', mask: "",     placeholder: "",           value: null},
        { label: 'Event-code',  type: 'text',     mask: "",     placeholder: "",           value: null}
      ]
    }
  },
  methods: {
    /**
     * Submit form or press button
     */
    onSubmit() {
      const params = {
        code: 503,
        message: 'We\'re undergoing a bit of scheduled maintenance. Sorry for the inconvenience. We\'ll be back and running as fast as possible.'
      }
      this.$router.push({ name: 'error', params })
    }
  },
  mounted() {
    const fields = this.$refs.fields.map(field => field.$el),
          timeline = new TimelineLite({
            delay: .8,
            onComplete: () => {
              document.getElementsByTagName('input')[0].focus()
            }
          })

    fields.push(...this.$refs.links)
    fields.push(this.$refs.btn)

    timeline.staggerFromTo(fields, .3, { y: -20, autoAlpha: 0}, { y: 0, autoAlpha: 1}, .1)
  },
  components: { AppTitle, AppLink, AppInput, AppButton }
}
</script>

<style lang="sass">/* @/assets/sass/componenst/_form.sass */</style>
