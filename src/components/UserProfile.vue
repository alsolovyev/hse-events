<template>
  <section class="user">
    <div class="user__avatar"
      :style="{ 'background-image': `url(${user.avatar_url})` }">
        <button class="user__btn"
          title="Edit profile"
          @click="$emit('onClick')"><icon-pen/></button>
      </div>
    <h1 class="user__name">{{ `${user.first_name} ${user.last_name}`  }}</h1>
    <ul>
      <li class="user__info">{{ user.email }}</li>
      <li class="user__info">{{ user.university_of_studies }}</li>
      <li class="user__info">{{ user.company }}</li>
    </ul>
  </section>
</template>

<script>
import IconPen from '@/assets/icons/pen.svg'

export default {
  name: 'UserProfile',
  data() {
    return {
      user: this.$store.getters.getUser
    }
  },
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
