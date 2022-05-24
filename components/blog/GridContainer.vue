<template>
  <div class="grid-container">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid-container {
  max-width: map-get($map: $breakpoints, $key: xl);
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
