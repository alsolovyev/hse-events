<template>
  <div class="hes-events" id="hes-events">
    <!-- BEGIN Header -->
    <app-header/>
    <!-- END Header -->

    <!-- BEGIN Page -->
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
    <!-- END Page -->

    <!-- BEGIN Footer -->
    <app-footer/>
    <!-- END Footer -->

    <!-- BEGIN Background -->
    <app-background/>
    <!-- END Background -->

    <!-- BEGIN Modal -->
    <app-modal v-if="this.$store.getters.isModalOpen"/>
    <!-- END Modal -->

    <!-- BEGIN Notification -->
    <notifications
      classes="noti"
      position="bottom right"
      :duration="3000"/>
    <!-- END Notification -->
  </div>
</template>

<script>
import sayHello from '@/utils/sayHello'
import AppBackground from '@/components/AppBackground'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppModal from '@/components/AppModal'

export default {
  name: 'app',
  mounted() {
    sayHello()
  },
  components: { AppBackground, AppHeader, AppFooter, AppModal }
}
</script>

<style lang="sass">
.hes-events
  display: flex
  flex-direction: column
  // height: 0 // fix vertical stretch in IE
  min-height: 100vh
  padding: #{$padding * 3}

  +r(700)
    padding: #{$padding * 2}

.empty-img
  background-image: url("./assets/images/empty.png")
  background-size: cover
  background-position: center
  &::before
    content: ''
    display: block
    padding-top: 68%
</style>
