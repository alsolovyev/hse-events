<template>
  <main class="main form">
    <!-- BEGIN Title -->
    <app-title title="Sign In" subtitle="welcome to hse events"/>
    <!--END Title -->

    <!-- BEGIN Form -->
    <form @submit.prevent="onSubmit" class="form__wrapper">
      <app-input v-for="(field, index) in fields" :key="index"
        ref="fields"
        :label="field.label"
        :type="field.type"
        :mask="field.mask"
        :placeholder="field.placeholder"
        :isError="field.isError"
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
      <app-button :isLoading="isLoading" icon="enter" @onClick="onSubmit"/>
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
  name: 'Signin',
  data() {
    return {
      links: [
        { name: 'signup',         to: { name: 'signup' } },
        { name: 'reset password', to: { name: 'reset' } },
      ],
      fields: {
        username: { label: 'Username', type: 'text',     isError: false, mask: "", placeholder: "", value: null},
        password: { label: 'Password', type: 'password', isError: false, mask: "", placeholder: "", value: null}
      }
    }
  },
  methods: {
    /**
     * Submit form or press button
     */
    onSubmit() {
      // Change error status to false
      for(let key in this.fields) {
        this.fields[key].isError = false
      }

      // Collect user information
      const credentials = {
        // username: this.fields.username.value,
        // password: this.fields.password.value
        username: 'nklvmaxim@gmail.com',
        password: '3714988hh'
      }

      // Request
      this.$store.dispatch('USER_SIGNIN', credentials)
        .then(user => {
          // ... redirect to dashboard
          // console.log('Signin: ', user);
          // console.log('From store: ', this.$store.getters.getUser);
          this.$router.push({ name: 'dashboard', params: {
              // username: `#${user.email.split('@')[0]}`
              username: user.email.split('@')[0]
            }
          })
        })
        .catch(error => {
          switch (error.status) {
            case 400:
              for(let key in error.data) {
                if(this.fields.hasOwnProperty(key)) {
                  this.fields[key].isError = true
                  this.$notify({
                    type: 'error',
                    title: `Error field: <span class="pink">${key}</span>`,
                    text: error.data[key][0]
                  })
                } else {
                  this.$notify({
                    type: 'error',
                    title: 'Wrong credentials',
                    text: error.data[key][0]
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
  computed: {
    isLoading() {
      return this.$store.getters.authStatus === 'loading'
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
