<template>
  <main class="main event" data-bg="event" @click="isLoading = !isLoading">
    <transition name="fade" mode="out-in">
    <!-- BEGIN Event -->
    <div class="event__inner" v-if="!isLoading" key="event">
      <h1 class="event__title">Service, Activities and Technologies Offered by the Oil and Gas Complex</h1>
      <ul>
        <li>asd</li>
        <li>asd</li>
        <li>asd</li>
        <li>asd</li>
      </ul>
      <p class="event__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam incidunt facere amet exercitationem debitis voluptatum hic vel non. Cumque aut, sunt provident mollitia optio magnam facere vitae reprehenderit sit aliquid.</p>
    </div>
    <!-- END Event -->

    <!-- BEGIN Preloader -->
    <div class="event__preloader" v-else key="preloader">preloader</div>
    <!-- END Preloader -->
    </transition>
  </main>
</template>

<script>
export default {
  name: 'Event',
  data() {
    return {
      isLoading: true,
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
.event

  &::before
    content: attr(data-bg)
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    font: 900 200px/1 'Poppins', sans-serif
    text-transform: uppercase
    color: $grey
    z-index: -1

</style>
