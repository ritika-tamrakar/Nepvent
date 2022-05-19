<template>
  <section class="stat-container">
    <StatItem
      v-for="(stat, index) in stats"
      :key="index"
      :title="stat.title"
      :value="stat.value"
    />
  </section>
</template>

<script>
import StatItem from './StatItem.vue'
export default {
  name: 'StatView',
  components: { StatItem },

  data() {
    return {
      stats: [
        { title: 'Digital Menus', value: '50+' },
        { title: 'SMM clients', value: '5+' },
        { title: 'Total QR scans', value: '10K+' },
        { title: 'Total Clients', value: '25+' },
        { title: 'Total Products', value: '5+' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.stat-container {
  @include container();
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  padding: 4rem 1rem;

  @media (min-width: map-get($map: $breakpoints, $key: md)) {
    padding: 3rem 1rem 4rem 1rem;
  }

  @media (min-width: map-get($map: $breakpoints, $key: xl)) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
}
</style>
