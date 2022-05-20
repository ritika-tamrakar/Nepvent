<template>
  <main class="container">
    <hero-section />
    <stat-view />
    <additional-features-section />
  </main>
</template>

<script>
import HeroSection from '../components/indexPage/HeroSection.vue'
import StatView from '../components/indexPage/StatView.vue'
import AdditionalFeaturesSection from '../components/indexPage/AdditionalFeaturesSection.vue'
export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    StatView,
    AdditionalFeaturesSection,
  },
}
</script>

<style lang="scss" scoped>
.container {
  overflow-y: hidden;
}
</style>
