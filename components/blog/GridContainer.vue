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
  max-width: map-get($map: $breakpoints, $key: lg);
  width: fit-content;
  margin: auto;
  margin-top: 4rem;
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  @include mq(md) {
    grid-template-columns: 1fr 1fr;
  }
  @include mq(lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  gap: 2rem;
}
</style>
