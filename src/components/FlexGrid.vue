<template>
  <ul class="flex-grid">
    <li class="cell"
      v-for="(item, index) in items.slice(0, 3)"
      :key="index"
      :data-index="`0${index + 1}`">

      <span class="cell__line"></span>
      <p class="cell__text">{{ item.description || 'Add description field' }}</p>
      <app-link
        :to="item.to || { name: 'home' } "
        :name="item.name || 'Add name field '"/>
    </li>
  </ul>
</template>

<script>
/**
 * Application list.
 * Max items: 3
 */
import AppLink from '@/components/AppLink'

export default {
  name: 'FlexGrid',
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
.flex-grid
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
    transform: translateX(-3px) rotate(270deg)
    font-size: 12px
    font-weight: 700
    line-height: .8

  &__line
    display: block
    width: 12px
    height: 1px
    margin: 24px 0 20px 0
    background: $black
    +br(4)
</style>
