<template>
  <main class="main events">
    <!-- BEGIN Title -->
    <app-title title="Today events" :subtitle="date"/>
    <!-- END Title -->

    <!-- BEGIN Timeline -->
    <event-timeline ref="tl" v-if="events.length > 0" :events="events"/>
    <!-- END Timeline -->

    <!-- BEGIN Empty -->
    <div ref="empty" class="events__empty empty-img" title="There are no events today." v-else></div>
    <!-- END Empty -->
  </main>
</template>

<script>
import { TimelineLite } from 'gsap'
import moment from 'moment'
import AppTitle from '@/components/ui/AppTitle'
import EventTimeline from '@/components/event/EventTimeline'

export default {
  name: 'Events',
  data() {
    return {
      date: null,
      interval: null,
      events: [
        {
          id: 1,
          title: 'Gas and Oil Production Equipment',
          date: '02.01.2019',
          polls: [
            {
              id: 1,
              title: 'Equipment for collection and procession of oil and gas'
            },
            {
              id: 2,
              title: 'Equipment for water-supplying and sewage utilities and sewage utilities'
            }
          ]
        },
        {
          id: 2,
          title: 'Oil and Gas Transporting Equipment',
          date: '02.01.2019',
          polls: [
            {
              id: 1,
              title: 'Drilling technologies'
            },
            {
              id: 2,
              title: 'Means and technologies of non-destructive supervision'
            }
          ]
        },
        {
          id: 3,
          title: 'Service, Activities and Technologies Offered by the Oil and Gas Complex',
          date: '02.01.2019',
          polls: []
        },
        {
          id: 4,
          title: 'Oil and Gas Transporting Equipment',
          date: '02.01.2019',
          polls: [
            {
              id: 1,
              title: 'Drilling technologies'
            },
            {
              id: 2,
              title: 'Means and technologies of non-destructive supervision'
            }
          ]
        }
      ]
    }
  },
  methods: {
    /**
     * Get current time
     */
    getDate() { this.date = moment().format("dddd, MMMM Do, h:mm:ss a") }
  },
  mounted() {
    // Set date
    this.date = moment().format("dddd, MMMM Do, h:mm:ss a")
    // Start a constant update date
    this.interval = setInterval(this.getDate, 1000)

    const timeline = new TimelineLite({ delay: .8 })
    if(this.$refs.hasOwnProperty('tl')) {
      timeline.staggerFromTo(this.$refs.tl.$refs.event, .3, { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, .1)
    } else {
      timeline.fromTo(this.$refs.empty, .3, { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  components: { AppTitle, EventTimeline }
}
</script>

<style lang="sass">
.events
  display: flex
  flex-direction: column
  align-items: center


  &__empty
    position: relative
    margin: auto
    width: 250px
    &::after
      content: 'There are not events today.'
      width: 100%
      position: absolute
      bottom: 0
      left: 50%
      transform: translate(-50%, 120%)
      font-size: 12px
      text-align: center
      color: #dddddd

</style>
