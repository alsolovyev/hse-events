<template>
  <div>timeline</div>
</template>

<script>
export default {
  name: 'EventsTimeline',
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass"></style>
