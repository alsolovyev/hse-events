<template>
  <ul class="grid">
    <li class="cell"
      v-for="(item, index) in items.slice(0, 3)"
      :key="index"
      ref="cell"
      :data-index="`0${index + 1}`">
      <!-- BEGIN Line -->
      <span class="cell__line"></span>
      <!-- END Line -->

      <!-- BEGIN Content -->
      <p class="cell__text">{{ item.description || 'Add description field' }}</p>
      <!-- END Content -->

      <!-- BEGIN Link -->
      <app-link
        classes="pink"
        :to="item.to || { name: 'home' } "
        :name="item.name || 'Add name field '"/>
      <!-- END Link -->
    </li>
  </ul>
</template>

<script>
/**
 * Application list.
 * Max items: 3
 */
import AppLink from '@/components/ui/AppLink'

export default {
  name: 'AppGrid',
  props: {
    items: {
      type: Array,
      default: () => [1, 2, 3]
    }
  },
  components: { AppLink }
}
</script>

<style lang="sass">
.grid
  display: flex
  flex-flow: row wrap
  justify-content: space-between

.cell
  width: 32%
  // margin-bottom: 2% // ???????
  font-size: 12px

  &::before
    content: attr(data-index)
    display: inline-block
    transform: rotate(270deg)
    font-size: 10px
    font-weight: 700
    line-height: .8

  &__line
    display: block
    width: 12px
    height: 1px
    margin: 24px 0 20px 0
    background: rgba($black, .5)
    +br(4)

  .link
    line-height: 1.3
</style>
