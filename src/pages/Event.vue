<template>
  <main class="main event" data-bg="event">
    <transition name="fade" mode="out-in">
      <component :event="event" :is="component"></component>
    </transition>
  </main>
</template>

<script>
import axios from 'axios'
import AppPreloader from '@/components/ui/AppPreloader'
import AppEvent from '@/components/event/AppEvent'

export default {
  name: 'Event',
  data() {
    return {
      component: AppPreloader,
      event: null
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

    /**
     * Get event info from server
     */
    const url = 'https://www.mocky.io/v2/5d0df07b3400007b00ca4aca?mocky-delay=2000ms'
    // BEGIN Request
    axios.get(url, {
      id: this.$route.params.id
    })
    // Change component on success
    .then(response => {
      this.event = response.data
      this.component = AppEvent
    })
    // Redirect to the error page(with code and message)
    // eslint-disable-next-line
    .catch(error => {
      this.$router.push({ name: 'error', params:
        {
          code: 500,
          message: 'We\'re undergoing a bit of scheduled maintenance. Sorry for the inconvenience. We\'ll be back and running as fast as possible.'
        }
      })
    })
    // END Request
  },
  components: { AppPreloader, AppEvent }
}
</script>

<style lang="sass">
.event
  display: flex
  justify-content: center
  align-items: center

  &::before
    content: attr(data-bg)
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    // font: 900 200px/1 'Poppins', sans-serif
    font-family: 'Poppins', sans-serif
    line-height: 1
    font-weight: 900
    +css-lock(80, 200, 320, 1400)
    text-transform: uppercase
    color: $grey
    z-index: -1

  &__preloader
    // position: absolute !important
    // top: 50% !important
    // left: 50% !important
    // transform: translate(-50%, -50%) !important
</style>
