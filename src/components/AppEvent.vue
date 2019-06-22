<template>
  <!-- BEGIN Event -->
  <div class="event__inner">
    <!-- BEGIN Line -->
    <span class="event__line" ref="line"></span>
    <!-- END Line -->

    <!-- BEGIN Title -->
    <h1 class="event__title" ref="title">Service, Activities and Technologies Offered by the Oil and Gas Complex</h1>
    <!-- END Title -->

    <!-- BEGIN Info -->
    <ul class="event__list" ref="list">
      <li class="event__item"><span class="pink">Date: </span>Friday, June 21st, 10:00:00 am - 02:55:00 pm</li>
      <li class="event__item"><span class="pink">Location: </span>Saint-Petersburg, Peterburgskoye highway 64/1 EXPOFORUM, pavilion F, G, H, congress center</li>
      <li class="event__item"><span class="pink">Organiser: </span>EXPOFORUM INTERNATIONAL</li>
    </ul>
    <!-- END Info -->

    <!-- BEGIN Description -->
    <div class="event__descr" data-content ref="descr">
      <p>Exhibition <b>InGAS Stream 2019</b> will show the effective next generation technologies, products, goods and services, necessary for the gas industry</p>
      <p><b>InGAS Stream 2019</b> exhibitors are the developers of innovative products and technologies, planning and design organisations and research and development institutions involved in strategic development projects, which includes state and regional gasification programs, effective use of energy and energy preservation, development of small-scale deposits and new <a href="http://google.com" target="_blank">raw hydrocarbon deposits</a>. The exhibition will showcase the products of manufacturers and suppliers of the equipment of the overall process of the gas industry: from exploration and transportation to processing and usage of natural gas.</p>
      <blockquote>
        <p>"Success is not final; failure is not fatal: It is the courage to continue that counts."</p>
      </blockquote>
      <p>Thematic areas of the Exhibition:</p>
      <ol>
        <li>Gas and Oil Production Equipment
          <ul>
            <li>Drilling equipment and tools
              <ul>
                <li>Equipment for geological surveying</li>
                <li>Drilling units</li>
                <li>Electrical equipment for drilling units</li>
                <li>Special transporting and hoisting machines for drilling works</li>
                <li>Equipment required to prevent and eliminate accidents during drilling and casing of wells</li>
                <li>Equipment and tools for underground repair of wells</li>
              </ul>
            </li>
            <li>Equipment for collection and procession of oil and gas</li>
            <li>Equipment and tools for well cementing and other technological processes</li>
            <li>Special transporting and hoisting means for the production process</li>
            <li>Pumps, fans and compressors equipment</li>
            <li>Electrical equipment for the production process</li>
            <li>Equipment for development of offshore oil fields</li>
          </ul>
        </li>

        <li>Oil and Gas Transporting Equipment
          <ul>
            <li>Equipment for pipeline transportation of oil and gas
              <ul>
                <li>Building and assembling equipment</li>
                <li>Operation equipment</li>
                <li>Maintenance equipment</li>
              </ul>
            </li>
            <li>Special transporting means for transportation</li>
          </ul>
        </li>
      </ol>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nulla incidunt distinctio quas deserunt cumque aliquam. Odit eum doloremque, cupiditate deleniti facilis aspernatur quae, eveniet, distinctio facere dolorem explicabo, similique!</p>
    </div>
    <!-- END Description -->

    <!-- BEGIN Button -->
    <div class="event__footer" ref="btn">
      <app-button icon="list" @onClick="$router.push({ name: 'events' })"/>
    </div>
    <!-- END Button -->
  </div>
  <!-- END Event -->
</template>

<script>
import { TimelineLite } from 'gsap'
import AppButton from '@/components/AppButton'

export default {
  name: 'AppEvent',
  mounted() {
    /**
     * Insert information from "this.event"
     */
    // ....

    /*
     * Reveal animation
     */
    const elements = [],
          timeline = new TimelineLite({
    })

    // console.log(this.$refs)
    elements.push(this.$refs.title)
    elements.push(this.$refs.list)
    elements.push(...this.$refs.descr.children)
    elements.push(this.$refs.btn)

    timeline.staggerFromTo(elements, .3, { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, .05)
  },
  props: {
    event: {  }
  },
  components: { AppButton }
}
</script>

<style lang="sass">
.event
  &__inner
    position: relative
    width: 100%
    max-width: $content-width
    margin: 0 auto

  &__title
    position: relative
    // font-size: 30px
    +css-lock(20, 30, 320, 1400)
    font-weight: 700
    line-height: 1.3
    &::before
      content: ''
      width: $title-line-width
      height: 2px
      position: absolute
      top: .7em
      left: #{-$title-line-width - $title-line-margin}
      +br(4)
      background: currentColor
      +r(1000)
        display: none

  &__list
    width: 100%
    max-width: #{$content-width / 2}
    // margin: $padding 0 #{$padding * 2} 0
    margin: $padding*2 0

  &__item
    // margin: 10px 0
    margin-bottom: 10px
    // padding-left: 10px
    position: relative
    font-size: 12px
    font-weight: 500
    &:last-child
      margin-bottom: 0
    &::before
      content: ''
      display: inline-block
      border: 3px solid rgba($white, 0)
      border-left-color: $black
      margin-bottom: 2px
      margin-right: 3px
      opacity: .5

  &__descr

  &__footer
    text-align: center

</style>
