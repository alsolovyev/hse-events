<template>
  <section>
    <ul v-if="events.length > 0">
      <li ref="items" v-for="(event, index) in events" :key="index" style="margin-bottom: 40px">
        <event-card
          :eventId  = "event.id                                 || 1"
          :title    = "event.title                              || 'This event has no title'"
          :location = "event.location                           || 'ExpoForum'"
          :date     = "event.date.replace('/', '.').slice(0, 5) || '01.01'"
          :time     = "event.start_time.slice(0, 5)             || '10:00'"/>
      </li>
    </ul>
    <div class="empty-img" v-else style="width: 150px; margin: 0 auto" title="There are no upcoming events"></div>
  </section>
</template>

<script>
import { TimelineLite } from 'gsap'
import AppTitle from '@/components/ui/AppTitle'
import EventCard from '@/components/event/EventCard'

export default {
  name: 'UpcomingEvents',
  props: {
    events: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    const tl = new TimelineLite({
      delay: .3
    })
    tl.staggerFromTo(this.$refs.items, .5, { x: 20, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, .1)
  },
  components: { EventCard, AppTitle }
}
</script>

<style lang="sass"></style>
