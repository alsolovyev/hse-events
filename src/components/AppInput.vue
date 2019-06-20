<template>
  <div class="input" :class="{ 'input--in-focus':inFocus }">
    <label class="input__label" :for="filterLabel">{{ `${label.trim()}:` }}</label>
    <input class="input__field"
      ref="field"
      :id="filterLabel"
      :name="filterLabel"
      :type="type"
      :placeholder="placeholder"
      v-model.trim="value"
      @focus="inFocus = true"
      @blur="inFocus = false"
      @change="$emit('onChange', value)">
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  data() {
    return {
      inFocus: false,
      value: ''
    }
  },
  computed: {
    filterLabel: function() { return this.label.trim().toLowerCase().replace(/ /g,"-") }
  },
  /*
   * Should we use filters?
   */
  // filters: {
  //   toLower(value) {
  //     return value.toLowerCase()
  //   },
  //   removeSpaces(value) {
  //     return value.trim().replace(/ /g,"-");
  //   }
  // },
  props: {
    label: {
      type: String,
      default: 'Input label'
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    mask: {
      type: String,
      default: '*'
    }
  }
}
</script>

<style lang="sass">
.input
  display: flex
  flex-direction: column
  position: relative

  &::after
    content: ''
    display: block
    width: 100%
    height: 1px
    position: absolute
    bottom: 0
    left: 0
    background: $blue
    +br
    transform: translate3d(0, 0, 0) scale3d(0, 1, 1)
    transition: transform .3s

  &--in-focus
    &::after
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1)
    .input__label
      color: $blue

  &--error
    &::after
      background: $pink

  &__label
    font-size: 12px
    transition: color .3s

  &__field
    padding: 10px 5px
    font-size: 14px
    font-weight: 500
    border-bottom: 1px solid rgba($black, .1)

    &::placeholder
      font-weight: 400
      color: rgba($black,.2)
</style>
