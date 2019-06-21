<template>
  <ul class="timeline">
    <li class="timeline__item" v-for="(event, i) in events" :key="i"
      ref="event"
      @mouseenter="hideItems(i)"
      @mouseleave="showItems(i)"
      :class="{ 'timeline__item--in-progress': i % 3 === 1 }">
      <!-- BEGIN On air -->
      <span class="timeline__on-air" title="Ongoing events"></span>
      <!-- END On air -->

      <!-- BEGIN Event title -->
      <h2 class="timeline__title" title="Go to the event page">
        <a href="">{{event.title}}</a>
      </h2>
      <!-- END Event title -->

      <!-- BEGIN Event date -->
      <p class="timeline__date">{{ event.date }}</p>
      <!-- END Event date -->

      <ul v-if="event.polls.length !== 0">
        <!-- BEGIN Poll -->
        <li v-for="(poll, j) in event.polls" :key="j">
          <a class="timeline__poll" href="">{{poll.title}}</a>
        </li>
        <!-- END Poll -->
      </ul>

      <!-- BEGIN Empty -->
      <div title="There are no pollings at this event." class="timeline__empty empty-img" v-else></div>
      <!-- END Empty -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'EventsTimeline',
  methods: {
    hideItems(index) {
      for(let i = 0, len = this.$refs.event.length; i < len; i++) {
        if(index !== i) this.$refs.event[i].classList.add('timeline__item--is-hidden')
      }
    },
    showItems() {
      for(let i = 0, len = this.$refs.event.length; i < len; i++) {
        this.$refs.event[i].classList.remove('timeline__item--is-hidden')
      }
    }
  },
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
.timeline
  width: 100%
  max-width: 500px
  margin: #{$padding * 2} 0

  &__item
    position: relative
    border-left: 1px solid rgba($black, .3)
    padding: $padding #{$padding*2}
    transition: opacity .3s
    &:last-child
      margin-bottom: 0

    &--in-progress
      border-color: $lime
      .timeline__on-air
        display: block
        &::after
          animation: eventInProgress 1.5s cubic-bezier(0, 0.2, 0.8, 1)infinite
        &::before
          animation: eventInProgress 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite .5s
      .timeline__title
          &::before
            background: $lime
            border-color: $lime

    &--is-hidden
      opacity: .3 !important
      border-color: rgba($black, .3)
      .timeline__title::before
          background: $white
          border-color: rgba($black, .3)

  &__title
    position: relative
    font-weight: 500
    font-size: 14px
    &::before
      content: ''
      border-radius: 50%
      position: absolute
      width: 9px
      height: 9px
      top: .5em
      left: #{-($padding * 2) - 5}
      border: 1px solid rgba($black, .3)
      background: $white
      transition: background .3s, border .3s
      z-index: 10

    &:hover
      text-decoration: underline

  &__date
    margin: 10px 0 25px 0
    font-size: 10px
    line-height: 1
    transition: color .3s
    font-weight: 500

  &__poll
    display: block
    position: relative
    padding: 6px 12px
    margin-bottom: 5px
    margin-left: 10px
    font-size: 12px
    line-height: 1
    overflow: hidden
    white-space: nowrap
    transition: transform .3s
    &::before,
    &::after
      content: ''
      position: absolute
    &::before
      top: 55%
      transform: translate(0, -50%)
      border: 3px solid rgba($white, 0)
      border-left-color: $black
      left: 0
      opacity: .5
    &::after
      width: 10%
      min-width: 25px
      height: 100%
      top: 0
      right: 0
      background-image: linear-gradient(90deg, $trans, $white 75%)
      z-index: 100

    &:hover
      transform: translate3d(10px, 0, 0)

  &__empty
    width: 150px
    margin: 0 auto

  &__on-air
    display: none
    width: 1px
    height: 1px
    position: absolute
    top: 31px
    left: -1px
    &::after,
    &::before
      content: ''
      width: 41px
      height: 41px
      border-radius: 50%
      position: absolute
      top: 50%
      left: 50%
      transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0)
      border: 1px solid $lime
      border-top-color: $trans
      border-bottom-color: $trans
</style>
