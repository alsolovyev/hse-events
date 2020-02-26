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
  width: $preloader-size
  height: $preloader-size
  position: relative
  // border-radius: 50%
  // border: $size solid $trans
  // border-bottom-color: $pink
  // animation: spinClockwise 5s infinite linear
  cursor: progress

  &__line
    display: block
    border: $size solid $trans
    border-radius: 50%
    position: absolute
    animation-iteration-count: infinite
    animation-timing-function: linear
    $colors: $lime, $blue, $pink, #616CFF
    $dirs: top, right, bottom, left
    $amount: 7
    @for $i from 1 through $amount
      &:nth-child(#{$i})
        $color: nth($colors, random(length($colors)))
        $dir: nth($dirs, random(length($dirs)))
        $p: 0
        top: #{$size * ($i - $p) * 2}
        right: #{$size * ($i - $p) * 2}
        bottom: #{$size * ($i - $p) * 2}
        left: #{$size * ($i - $p) * 2}
        @if $dir == 'top'
          border-top-color: $color
          animation-duration: #{random(5) + s}
          animation-name: spinClockwise
          // animation-name: spinCounterclockwise
        @else if $dir == 'right'
          border-right-color: $color
          animation-duration: #{random(5) + s}
          animation-name: spinClockwise
          // animation-name: spinCounterclockwise
        @else if $dir == 'left'
          border-left-color: $color
          animation-duration: #{random(5) + s}
          animation-name: spinClockwise
        @else
          border-bottom-color: $color
          animation-duration: #{random(5) + s}
          animation-name: spinClockwise


@keyframes spinClockwise
  to
    transform: translate3d(0, 0, 0) rotate(360deg)

@keyframes spinCounterclockwise
  to
    transform: translate3d(0, 0, 0) rotate(-360deg)
</style>
