<template>
  <section class="card">
    <!-- BEGIN Date -->
    <div class="card__date">
      <h3 class="card__month">{{ date }}</h3>
      <h3 class="card__time pink">{{ time }}</h3>
    </div>
    <!-- END Date -->

    <!-- BEGIN Content -->
    <div class="card__content">
      <h2>
        <router-link :to="{name: 'event', params: { id: eventId } }">{{ title }}</router-link>
      </h2>
      <p>{{ location }}</p>
    </div>
    <!-- END Content -->
  </section>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    title: {
      type: String,
      default: 'Event Title'
    },
    date: {
      type: String,
      default: '01.01'
    },
    time: {
      type: String,
      default: '10:00'
    },
    eventId: {
      value: Number | String,
      default: 1
    },
    location: {
      type: String,
      default: 'Event location'
    }
  }
}
</script>

<style lang="sass">
.card
  display: flex
  align-items: center

  &__date
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: #{$padding * 1.5}
    line-height: 1
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%
    box-shadow: 0 20px 30px $grey
    // border: 4px solid $grey
    background-image: repeating-linear-gradient(45deg, rgba($black,.05), rgba($black, .05) 2px, $transparent 0, $transparent 8px)

  &__month
    font-size: 20px
    letter-spacing: -2px
    margin-bottom: 5px

  &__time
    font-size: 12px

  &__content
    padding: $padding
    line-height: 1.4

    h2
      font-size: 14px
      margin-bottom: 5px
      &:hover
        text-decoration: underline

    p
      font-size: 12px
</style>
