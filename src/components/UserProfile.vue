<template>
  <section class="user">
    <div class="user__avatar"
      style="background-image: url(https://capella.pics/fb492161-6009-4fb9-a6ad-082f2b58b575.jpg)">
        <button class="user__btn"
          title="Edit profile"
          @click="$emit('onClick')"><icon-pen/></button>
      </div>
    <h1 class="user__name">Solovyev Alekseyasdasd</h1>
    <ul>
      <li class="user__info">solovyev.a@icloud.com</li>
      <li class="user__info">Higher School of Economics asd as d</li>
    </ul>
  </section>
</template>

<script>
import IconPen from '@/assets/icons/pen.svg'

export default {
  name: 'UserProfile',
  components: { IconPen }
}
</script>

<style lang="sass">
.user
  $avatar-border: 4px solid $grey
  text-align: center

  &__avatar
    width: $user-avatar-size
    height: $user-avatar-size
    margin: 0 auto
    border: $avatar-border
    border-radius: 50%
    position: relative
    background-size: cover
    background-position: center

  &__btn
    padding: 10px
    position: absolute
    bottom: 1px
    right: 1px
    border: $avatar-border
    border-bottom-color: $transparent
    border-right-color: $transparent
    border-radius: 50%
    background: $white
    .icon
      width: $padding / 1.5
      height: $padding / 1.5
      +center

    &:hover
      .icon
        fill: $pink

  &__name
    margin: 1.5em 0
    font-size: 14px
    font-weight: 700
    line-height: 1.3

  &__info
    position: relative
    font-size: 11px
    // text-align: left
    +text-overflow

</style>
