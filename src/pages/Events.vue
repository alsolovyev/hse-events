<template>
  <main class="main events">
    <!-- BEGIN Title -->
    <app-title title="Today events" :subtitle="date"/>
    <!-- END Title -->
  </main>
</template>

<script>
import moment from 'moment'
import AppTitle from '@/components/AppTitle'

export default {
  name: 'Events',
  data() {
    return {
      date: null,
      interval: null,
    }
  },
  methods: {
    /**
     * Get current time
     */
    getTime() { this.date = moment().format("dddd, MMMM Do, h:mm:ss a") }
  },
  mounted() {
    this.date = moment().format("dddd, MMMM Do, h:mm:ss a")
    this.interval = setInterval(this.getTime, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  components: { AppTitle }
}
</script>

<style lang="sass">
.events
  display: flex
  flex-direction: column

</style>
