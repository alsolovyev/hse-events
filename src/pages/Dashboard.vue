<template>
  <main class="main layout">
    <!-- BEGIN Aside -->
    <div class="block block--small">
      <user-profile ref="user" @onClick="editProfile"/>
      <hr ref="l1">

      <sub-nav ref="nav" @onClick="changeContent" :links="links"/>
      <hr ref="l2">

      <div ref="btn" style="text-align: center">
        <app-button
          :isLoading="$store.getters.getStatus === 'loading'"
          icon="logout"
          @onClick="$store.dispatch('USER_LOGOUT')"/>
      </div>
    </div>
    <!-- END Aside -->

    <!-- BEGIN Content -->
    <div class="block block--big">
      <!-- <component :events="events" :is="content"></component> -->
    </div>
    <!-- END Content -->
  </main>
</template>

<script>
import { TimelineLite } from 'gsap'
import axios from 'axios'
import api from '@/config/api-endpoints'
import UserProfile from '@/components/UserProfile'
import SubNav from '@/components/SubNav'
import AppButton from '@/components/ui/AppButton'
// import UpcomingEvents from './UpcomingEvents'

export default {
  name: 'Dashboard',
  data() {
    return {
      // content: UpcomingEvents,
      events: [],
      links: [
        { name: 'Upcoming events',  to: '123' }
      ]
    }
  },
  methods: {
    editProfile() { console.log('edit profile') },
    changeContent() { console.log('change content') }
  },
  mounted() {
    // Animation
    const tl  = new TimelineLite({ })
    tl.fromTo(this.$refs.user.$el, .5, { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
    tl.fromTo(this.$refs.l1,       .3, { scaleX: 0 }           , { scaleX: 1 },          '-=.3')
    tl.fromTo(this.$refs.nav.$el,  .5, { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.3')
    tl.fromTo(this.$refs.l2,       .3, { scaleX: 0 }           , { scaleX: 1 },          '-=.3')
    tl.fromTo(this.$refs.btn,      .5, { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.3')

    // Get last N events
    axios.get(`${api.events}5`)
      .then(response => this.events = response.data)
      .catch(error => console.log(error))
  },
  components: {
    UserProfile,
    SubNav,
    AppButton,
    // UpcomingEvents
  }
}
</script>

<style lang="sass"></style>
