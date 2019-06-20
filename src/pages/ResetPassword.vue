<template>
  <main class="main main--centered main--column">
    <app-title title="Reset Password" subtitle="Account recovery"/>

    <form action="" class="form">
      <app-input v-for="(field, index) in fields" :key="index"
        ref="fields"
        :label="field.label"
        :type="field.type"
        :mask="field.mask"
        :placeholder="field.placeholder"
        @onChange="value => field.value = value"/>
    </form>

    <ul class="form__links">
      <li class="form__link" v-for="(link, index) in links" :key="index" ref="links">
        <app-link
          :name="link.name"
          :to="link.to"/>
      </li>
    </ul>

    <div ref="btn">
      <app-button icon="enter"/>
    </div>
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
        { name: 'signin', to: { name: 'signin' } },
        { name: 'signup', to: { name: 'signup' } },
      ],
      fields: [
        { label: 'Password', type: 'password', mask: "", placeholder: "", value: null}
      ]
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
