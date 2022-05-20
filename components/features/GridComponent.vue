<template>
  <div class="g-container">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.g-container {
  padding: 0 var(--horizontal-padding);

  margin-top: 1rem;
  @media (min-width: map-get($map: $breakpoints, $key: md)) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    grid-template-areas: 'one two';
  }
}
</style>
