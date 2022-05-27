<template>
  <main class="container">
    <hero-section @demo-clicked="show()" />
    <stat-view />
    <additional-features-section />
    <testimonials-section />
  </main>
</template>

<script>
import HeroSection from '../components/indexPage/HeroSection.vue'
import StatView from '../components/indexPage/StatView.vue'
import AdditionalFeaturesSection from '../components/indexPage/AdditionalFeaturesSection.vue'
// import RequestDemoForm from '../components/indexPage/RequestDemoForm.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    StatView,
    AdditionalFeaturesSection,
    TestimonialsSection: () =>
      import('../components/indexPage/TestimonialsSection.client.vue'),
    // RequestDemoForm,
  },
  layout: 'ModalLayout',
  data() {
    return {
      showmodal: 'false',
    }
  },
  methods: {
    show() {
      this.$modal.show('request-form-modal')
    },
    hide() {
      this.$modal.hide('request-form-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  overflow-y: hidden;
}
</style>
