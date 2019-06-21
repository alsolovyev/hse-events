<template>
  <ul class="timeline">
    <li class="timeline__item" v-for="(event, i) in events" :key="i"
      ref="event"
      @mouseenter="hideItems(i)"
      @mouseleave="showItems(i)"
      :class="{ 'timeline__item--in-progress': i % 3 === 1 }">
      <!-- BEGIN Event title -->
      <h2 class="timeline__title"><a href="">{{event.title}}</a></h2>
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
  data() {
    return {
      test: null
    }
  },
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
  // +check

  &__item
    // +check
    // margin-bottom: #{$padding * 3}
    border-left: 1px solid rgba($black, .3)
    padding: $padding #{$padding*2}
    transition: opacity .3s

    &:last-child
      margin-bottom: 0

    &:hover
      border-color: $blue
      .timeline__title::before
        background: $blue
        border-color: $blue
      .timeline__poll::before
        background: $blue

    &--in-progress
      border-color: $pink
      .timeline
        &__date
          // color: $lime
        &__title::before
          background: $pink
          border-color: $pink

        &__poll::before
          transform: scale3d(1, 1, 1)
          background: $pink

    &--is-hidden
      opacity: .3 !important
      border-color: rgba($black, .3)
      .timeline
        &__date
          // color: $lime
        &__title::before
          background: $white
          border-color: rgba($black, .3)

  &__title
    position: relative
    font-weight: 500
    font-size: 14px

    &::before
      content: ''
      width: 9px
      height: 9px
      border-radius: 50%
      border: 1px solid rgba($black, .3)
      position: absolute
      top: .5em
      left: #{-($padding * 2) - 5}
      z-index: 10
      background: $white
      transition: background .3s, border .3s

  &__date
    margin: 10px 0 15px 0
    font-size: 10px
    line-height: 1
    transition: color .3s

  &__poll
    display: block
    padding: 6px 12px
    margin-bottom: 10px
    +br(2)
    +br-light
    position: relative
    font-size: 12px
    overflow: hidden
    white-space: nowrap
    // text-overflow: ellipsis
    transition: transform .3s
    &::before,
    &::after
      content: ''
      height: 100%
      position: absolute
      top: 0
    &::before
      left: 0
      width: 2px
      background: $blue
      transform: scale3d(0, 1, 1)
      transition: transform .3s, background .3s

    &::after
      right: 0
      width: 15%
      min-width: 20px
      background-image: linear-gradient(90deg, rgba($white, 0), rgba($white, 1) 75%)

    &:hover
      transform: translate3d(10px, 0, 0)
      &::before
        transform: scale3d(1, 1, 1)

  &__empty
    width: 150px
    margin: 0 auto
</style>
