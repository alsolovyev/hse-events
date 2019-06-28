<template>
  <main class="main layout">
    <!-- BEGIN Aside -->
    <div class="block block--small">
      <user-profile @onClick="editProfile"/>
      <hr>

      <sub-nav @onClick="changeContent" :links="links"/>
      <hr>

      <app-button icon="logout"/>
    </div>
    <!-- END Aside -->

    <!-- BEGIN Content -->
    <div class="block block--big">asd</div>
    <!-- END Content -->
  </main>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import SubNav from '@/components/SubNav'
import AppButton from '@/components/AppButton'

export default {
  name: 'Dashboard',
  data() {
    return {
      links: [
        { name: 'Edit profile', to: '123' },
        { name: 'Upcompin event', to: '123' },
        { name: 'Polls', to: '123' }
      ]
    }
  },
  methods: {
    editProfile() { console.log('edit profile') },
    changeContent() { console.log('change content') }
  },
  components: { UserProfile, SubNav, AppButton }
}
</script>

<style lang="sass">
.layout
  .btn
    display: block
    margin: 0 auto
</style>
