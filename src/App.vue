<template>
  <div class="hes-events" id="hes-events">
    <!-- BEGIN Header -->
    <app-header/>
    <!-- END Header -->

    <!-- BEGIN Page -->
    <router-view/>
    <!-- END Page -->

    <!-- BEGIN Footer -->
    <app-footer/>
    <!-- END Footer -->

    <!-- BEGIN Background -->
    <app-background/>
    <!-- END Background -->

    <!-- BEGIN Modal -->
    <app-modal/>
    <!-- END Modal -->
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
  height: 0 // fix vertical stretch in IE
  min-height: 100vh
  padding: #{$padding * 3}
</style>
