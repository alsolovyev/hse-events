<template>
  <div class="modal" @click="closeModal" >
    <!-- BEGIN Button -->
    <div class="modal__btn" ref="btn"></div>
    <!-- END Button -->
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  methods: {
    /**
     * Close modal window
     */
    closeModal() {
      const btn = this.$refs.btn
      if(btn.classList.contains('modal__btn--is-open')) {
        this.$refs.btn.classList.remove('modal__btn--is-open')
        this.$refs.btn.classList.add('modal__btn--is-closed')
      } else {
        this.$refs.btn.classList.add('modal__btn--is-open')
        this.$refs.btn.classList.remove('modal__btn--is-closed')
      }
      console.log('close modal')
    }
  }
}
</script>

<style lang="sass">
.modal
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 1000

  background: $dark

  &::after,
  &::before
    content: ''
    width: 1px
    height: 100%
    position: absolute
    top: 0
    background: #000
  &::before
    left: 33.33%
  &::after
    left: 66.66%

  &__inner
    width: 100%
    max-width: $modal-width


  &__btn
    position: fixed
    top: #{$padding * 2}
    right: #{$padding}
    cursor: pointer
    &::before,
    &::after
      content: ''
      position: absolute
      display: block
      top: 0
      right: 0
      width: 75px
      height: 35px
      background: $white
      transform: scale(0)

    &--is-open
      &::after
        animation: showModalButtonUno .6s cubic-bezier(.64,.57,.67,1.53) forwards
      &::before
        animation: showModalButtonDos .6s cubic-bezier(.64,.57,.67,1.53) forwards

    &--is-closed
      &::after
        animation: closeModalBtnUno .6s cubic-bezier(.64,.57,.67,1.53) forwards
      &::before
        animation: closeModalBtnDos .6s cubic-bezier(.64,.57,.67,1.53) forwards

@keyframes showModalButtonUno
  0%
    transform: rotate(0deg) scaleX(0)
  50%
    transform: rotate(0deg) scaleX(1)
  100%
    transform: rotate(45deg) scaleX(1)

@keyframes showModalButtonDos
  0%
    transform: rotate(0deg) scaleX(0)
  50%
    transform: rotate(0deg) scaleX(1)
  100%
    transform: rotate(-45deg) scaleX(1)

@keyframes closeModalBtnUno
  0%
    transform: rotate(45deg) scaleX(1)
  50%
    transform: rotate(0deg) scaleX(1)
  100%
    transform: rotate(0deg) scaleX(0)

@keyframes closeModalBtnDos
  0%
    transform: rotate(-45deg) scaleX(1)
  50%
    transform: rotate(0deg) scaleX(1)
  100%
    transform: rotate(0deg) scaleX(0)
</style>
