<template>
  <main class="main main--h-centered">
    <app-title title="Today events" :subtitle="currentDate"/>
  </main>
</template>

<script>
import moment from 'moment'
import AppTitle from '@/components/AppTitle'

export default {
  name: 'Events',
  computed: {
    currentDate: function() {
      return moment().format("dddd, MMMM Do, h:mm:ss a")
    }
  },
  components: { AppTitle }
}
</script>

<style lang="sass"></style>
