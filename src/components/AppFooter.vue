<template>
  <footer class="footer">
    <!-- BEGIN Button -->
    <button class="footer__btn" @click="openModal('Apple')">
      <icon-apple/>
    </button>
    <!-- END Button -->

    <!-- BEGIN Button -->
    <button class="footer__btn" @click="openModal('Android')">
      <icon-android/>
    </button>
    <!-- END Button -->
  </footer>
</template>

<script>
import IconApple from '@/assets/icons/apple.svg'
import IconAndroid from '@/assets/icons/android.svg'

export default {
  name: 'AppFooter',
  methods: {
    /**
     * Open modal window with information about mobile application
     */
    openModal() { this.$store.commit('TOGGLE_MODAL', true) }
  },
  components: { IconApple, IconAndroid }
}
</script>

<style lang="sass">
.footer
  display: flex

  &__btn
    width: 15px
    height: 15px
    margin-right: 5px
    background: none
    opacity: .3
    transition: opacity .3s
    cursor: pointer

    &:hover
      opacity: 1
</style>
