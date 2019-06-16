<template>
  <div class="hes-events" id="hes-events">
    <!-- BEGIN Header -->
    <!-- END Header -->

    <!-- BEGIN Page -->
    <router-view/>
    <!-- END Page -->

    <!-- BEGIN Footer -->
    <!-- END Footer -->

    <!-- BEGIN Background -->
    <app-background/>
    <!-- END Background -->
  </div>
</template>

<script>
import sayHello from '@/utils/sayHello'
import AppBackground from '@/components/AppBackground'

export default {
  name: 'app',
  mounted() {
    sayHello()
  },
  components: { AppBackground }
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
