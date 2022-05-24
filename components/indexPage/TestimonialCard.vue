<template>
  <div class="card-wrapper">
    <div class="content-wrapper">
      <BareQuotes />
      <p class="testimonial">
        {{ testimonial }}
      </p>
      <div class="text-wrapper">
        <div class="review-wrapper">
          <StarSvg v-for="(_, index) in Array(noOfStars)" :key="index" />
        </div>
        <h3 class="client-name">{{ clientName }}</h3>
        <p class="business-name">{{ businessName }}</p>
      </div>
    </div>

    <span class="business-name-decor">{{ businessName }}</span>
  </div>
</template>

<script>
import BareQuotes from './BareQuotes.vue'
import StarSvg from './StarSvg.vue'
export default {
  props: {
    clientName: {
      type: String,
      default: '',
    },
    businessName: {
      type: String,
      default: '',
    },
    testimonial: {
      type: String,
      default: '',
    },
    noOfStars: {
      type: Number,
      default: 5,
    },
  },
  components: { BareQuotes, StarSvg },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  margin-top: 1.9rem;
  background-color: map-get($map: $colors, $key: light-300);

  .content-wrapper {
    padding: 1.5rem 1.6rem;

    /* media queries */
    @include mq(xs) {
      padding: 1.5rem 2rem;
    }
    @include mq(md) {
      padding: 2.4rem 4.125rem;
    }
  }
}
</style>
