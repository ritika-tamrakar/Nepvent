<template>
  <main class="container">
    <hero-section />
    <stat-view />
    <additional-features-section />
    <product-plans-section />
  </main>
</template>

<script>
import HeroSection from '../components/indexPage/HeroSection.vue'
import StatView from '../components/indexPage/StatView.vue'
import AdditionalFeaturesSection from '../components/indexPage/AdditionalFeaturesSection.vue'
import ProductPlansSection from '../components/indexPage/ProductPlansSection.vue'
export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    StatView,
    AdditionalFeaturesSection,
    ProductPlansSection,
  },
}
</script>

<style lang="scss" scoped>
.container {
  overflow-y: hidden;
}
</style>
