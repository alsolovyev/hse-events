<template>
  <ul class="subnav">
    <li class="subnav__link"
      v-for="(link, index) in links"
      :key="index"
      :data-index="`0${index + 1}`">
      <button ref="btns" class="subnav__btn" @click="onClick(link.to, index)">{{link.name}}</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SubNav',
  methods: {
    onClick(to, index) {
      // ToDO: fix this. I'm so tired TT
      this.$refs.btns.forEach(btn => btn.classList.remove('subnav__btn--is-active'))
      this.$refs.btns[index].classList.add('subnav__btn--is-active')
      this.$emit('onClick', to)
    }
  },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
.subnav
  // text-align: center
  font-size: 12px
  text-transform: uppercase

  &__link
    display: flex
    align-items: center
    margin-bottom: 10px
    position: relative
    &:last-child
      margin-bottom: 0
    &::before
      content: attr(data-index)
      display: inline-block
      font-size: 10px
      font-weight: 900

  &__btn
    display: flex
    align-items: center
    background: none
    transition: color .3s
    +text-overflow
    &::before
      content: ''
      display: inline-block
      width: $padding
      height: 1px
      margin: 0 10px
      background: rgba($black, .3)
      +br(4)
      transition: width .3s
    &:hover,
    &:active,
    &--is-active
      &::before
        width: #{$padding + 10px}

    &--is-active
      color: $pink

</style>
