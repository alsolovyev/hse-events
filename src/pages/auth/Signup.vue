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
        :isError="field.isError"
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
        first_name: { label: 'First name',  type: 'text',     isError: false, mask: "",     placeholder: "",           value: ''},
        last_name:  { label: 'Last name',   type: 'text',     isError: false, mask: "",     placeholder: "",           value: ''},
        email:      { label: 'Email',       type: 'email',    isError: false, mask: "",     placeholder: "",           value: ''},
        dob:        { label: 'Birthday',    type: 'text',     isError: false, mask: "date", placeholder: "31.12.2019", value: ''},
        password:   { label: 'Password',    type: 'password', isError: false, mask: "",     placeholder: "",           value: ''},
        repassword: { label: 'Re-password', type: 'password', isError: false, mask: "",     placeholder: "",           value: ''},
        code:       { label: 'Event-code',  type: 'text',     isError: false, mask: "",     placeholder: "",           value: ''}
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

      // Create valid for django date format(YYYY-MM-DD)
      if(credentials.dob) credentials.dob = credentials.dob.split('.').reverse().join('-')

      // Request
      this.$store.dispatch('USER_SIGNUP', credentials)
        .then(user => {
          console.log(user)
          // Redirect to user page
          // this.$router.push({ name: 'dashboard', params: {
          this.$router.push({ name: 'dashboard', params: {
              // username: `#${user.email.split('@')[0]}`
              username: user.email.split('@')[0]
            }
          })
        })
        .catch(error => {
          console.log('Error', error)
          switch (error.status) {
            case 400:
              for(let key in error.data) {
                if(this.fields.hasOwnProperty(key)) {
                  this.fields[key].isError = true
                  this.$notify({
                    type: 'error',
                    title: `<span class="pink">${key.replace('_', ' ')}</span>`,
                    text: error.data[key][0]
                  })
                } else {
                  this.fields.code.isError = true
                  this.$notify({
                    type: 'error',
                    title: '<span class="pink">Invalid code</span>',
                    text: error.data[key]
                  })
                }
              }
              break
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
