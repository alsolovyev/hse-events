<template>
  <div id="hes-events">
    <!-- begin Page -->
    <router-view/>
    <!-- end Page -->

    <!-- begin Background -->
    <app-background/>
    <!-- end Background -->
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

<style lang="sass"></style>
