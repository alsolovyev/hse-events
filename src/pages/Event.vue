<template>
  <main class="main event">
    event: {{event.id}}
  </main>
</template>

<script>
export default {
  name: 'Event',
  data() {
    return {
      event: {
        id: null
      }
    }
  },
  mounted() {
    /**
     * Check event id is not a number
     */
    if(isNaN(this.$route.params.id)) {
      this.$router.push({ name: 'error' })
      return
    }

    this.event.id = this.$route.params.id
  }
}
</script>

<style lang="sass">

</style>
