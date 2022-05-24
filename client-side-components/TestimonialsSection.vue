<template>
  <section class="testimonials-container">
    <h6 class="section-tag">testimonials</h6>
    <h3 class="section-title">Check what our <br />clients are saying</h3>

    <div class="testimonials-wrapper">
      <QuotesSvg class="quotes-svg" />

      <client-only placeholder="...loading">
        <Carousel>
          <Slide
            v-for="(
              { clientName, businessName, testimonial }, index
            ) in testimonials"
            :key="index"
          >
            <TestimonialCard
              :client-name="clientName"
              :business-name="businessName"
              :testimonial="testimonial"
            />
          </Slide>
        </Carousel>
      </client-only>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import TestimonialCard from '../components/indexPage/TestimonialCard.vue'
import QuotesSvg from '../components/indexPage/QuotesSvg.vue'

export default {
  components: { TestimonialCard, Carousel, Slide, QuotesSvg },
  data() {
    return {
      testimonials: [
        {
          clientName: 'Bhawani Silakar',
          businessName: 'Morrison Cafe',
          testimonial:
            'Initially, I was skeptical about using a relatively young product as compared to other big players. But now I find it very efficient, simple and well built.',
        },
      ],
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.testimonials-container {
  @include container();

  padding: 2rem var(--horizontal-padding);

  .section-tag {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
  }
  .section-title {
    margin-top: 0.9rem;
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    /* or 120% */

    letter-spacing: -0.03em;
  }

  @media (min-width: map-get($map: $breakpoints, $key: md)) {
    .section-tag {
      font-size: 14px;
    }
    .section-title {
      font-size: 40px;
      line-height: 48px;
    }
  }

  .testimonials-wrapper {
    @include mq(xs) {
      padding: 0 1rem;
    }
  }
  .quotes-svg {
    margin-top: 2rem;
  }
}
</style>
