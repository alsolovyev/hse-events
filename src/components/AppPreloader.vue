<template>
  <div class="preloader" title="Loading...">
    <span class="preloader__line"></span>
    <span class="preloader__line"></span>
    <span class="preloader__line"></span>
    <span class="preloader__line"></span>
    <span class="preloader__line"></span>
    <span class="preloader__line"></span>
    <span class="preloader__line"></span>
  </div>
</template>

<script>
export default {
  name: 'AppPreloader'
}
</script>

<style lang="sass">
.preloader
  $size: 1px
  width: 75px
  height: 75px
  position: relative
  border-radius: 50%
  border: $size solid $trans
  border-bottom-color: $pink
  animation: spinCounterclockwise 1s infinite linear

  &__line
    $colors: $lime, $blue, $pink, #616CFF, $orange
    $dirs: top, right, bottom, left
    display: block
    border: $size solid $trans
    border-radius: 50%
    position: absolute
    animation-iteration-count: infinite
    animation-timing-function: linear
    @for $i from 1 through 7
      &:nth-child(#{$i})
        $color: nth($colors, random(length($colors)))
        $dir: nth($dirs, random(length($dirs)))
        top: #{$size * ($i - 0) * 2}
        right: #{$size * ($i - 0) * 2}
        bottom: #{$size * ($i - 0) * 2}
        left: #{$size * ($i - 0) * 2}
        @if $dir == 'top'
          border-top-color: $color
          animation-duration: #{random(3) + 2 + s}
          animation-name: spinCounterclockwise
        @else if $dir == 'right'
          border-right-color: $color
          animation-duration: #{random(3) + 2 + s}
          animation-name: spinCounterclockwise
        @else if $dir == 'left'
          border-left-color: $color
          animation-duration: #{random(1) + 2 + s}
          animation-name: spinClockwise
        @else
          border-bottom-color: $color
          animation-duration: #{random(1) + 2 + s}
          animation-name: spinClockwise



@keyframes spinClockwise
  to
    transform: translate3d(0, 0, 0) rotate(360deg)

@keyframes spinCounterclockwise
  to
    transform: translate3d(0, 0, 0) rotate(-360deg)
</style>
