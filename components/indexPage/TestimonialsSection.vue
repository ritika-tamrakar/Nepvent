<template>
  <section class="testimonials-container">
    <h6 class="section-tag">testimonials</h6>
    <h3 class="section-title">Check what our <br />clients are saying</h3>
    <div class="testimonial-wrapper">
      <TestimonialCard
        v-for="(
          { clientName, businessName, testimonial }, index
        ) in testimonials"
        :key="index"
        :client-name="clientName"
        :business-name="businessName"
        :testimonial="testimonial"
      />
    </div>
  </section>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue'
export default {
  components: { TestimonialCard },
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
}
</script>

<style lang="scss" scoped>
.testimonials-container {
  @include container();
  padding: 2rem 1rem;
}
</style>
