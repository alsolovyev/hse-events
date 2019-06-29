<template>
  <main class="main form">
    <!-- BEGIN Title -->
    <app-title title="Create account" subtitle="welcome to hse events"/>
    <!--END Title -->

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
      <app-button
        :isLoading="$store.getters.authStatus === 'loading'"
        icon="enter"
        @onClick="onSubmit"/>
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
  name: 'Signup',
  data() {
    return {
      links: [
        { name: 'signin',         to: { name: 'signin' } },
        { name: 'reset password', to: { name: 'reset' } },
      ],
      fields: {
        first_name: { label: 'First name',  type: 'text',     isError: false, mask: "",     placeholder: "",           value: null},
        last_name:  { label: 'Last name',   type: 'text',     isError: false, mask: "",     placeholder: "",           value: null},
        email:      { label: 'Email',       type: 'email',    isError: false, mask: "",     placeholder: "",           value: null},
        dob:        { label: 'Birthday',    type: 'text',     isError: false, mask: "date", placeholder: "12.31.2019", value: null},
        password:   { label: 'Password',    type: 'password', isError: false, mask: "",     placeholder: "",           value: null},
        repassword: { label: 'Re-password', type: 'password', isError: false, mask: "",     placeholder: "",           value: null},
        code:       { label: 'Event-code',  type: 'text',     isError: false, mask: "",     placeholder: "",           value: null}
      }
    }
  },
  methods: {
    /**
     * Submit form or press button
     */
    onSubmit() {
      // Collect user information
      const credentials = {  }

      // Change error status to false
      for(let key in this.fields) {
        this.fields[key].isError = false
        credentials[key] = this.fields[key].value
      }

      // Request
      this.$store.dispatch('USER_SIGNUP', credentials)
        .then(user => {
          console.log(user)
          // Redirect to user page
          // this.$router.push({ name: 'dashboard', params: {
              // username: `#${user.email.split('@')[0]}`
              // username: user.email.split('@')[0]
            // }
          // })
        })
        .catch(error => {
          switch (error.code) {
            default:
              this.$router.push({ name: 'error', params: {
                code: error.status,
                message: `${error.statusText}. We're undergoing a bit of scheduled maintenance. Sorry for the inconvenience. We'll be back and running as fast as possible.`
              } })
          }
        })
    }
  },
  mounted() {
    const fields = this.$refs.fields.map(field => field.$el),
          timeline = new TimelineLite({
            delay: .8,
            onComplete: () => {
              const input = document.getElementsByTagName('input')[0]
              if(input) input.focus()
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
