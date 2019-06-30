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
      :duration="5000"/>
    <!-- END Notification -->
  </div>
</template>

<script>
// import axios from 'axios'
import sayHello from '@/utils/sayHello'
import AppBackground from '@/components/layout/AppBackground'
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'
import AppModal from '@/components/layout/AppModal'

// import { OLD } from '@/config/users'

export default {
  name: 'app',
  mounted() {
    sayHello()
  },
  beforeCreate() {
    /**
     * Check if client is already authenticated
     */
    const token = localStorage.getItem('user-token')
    if(token) {
      // axios.defaults.headers.common['Authorization'] = `Token ${token}`
      // Get user data
      // axios get user
      // const user = {...OLD}
      // this.$store.commit('USER_AUTH')
    }
  },
  components: { AppBackground, AppHeader, AppFooter, AppModal }
}
</script>

<style lang="sass">
.hes-events
  display: flex
  flex-direction: column
  height: 0 // fix vertical stretch in IE
  overflow-x: hidden
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
