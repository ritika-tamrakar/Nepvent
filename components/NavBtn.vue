<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'NavBtn',
}
</script>

<style lang="scss" scoped>
.btn {
  @include reset-btn();
  @include brand-gradient();

  color: map-get($map: $text, $key: light-200);

  padding: 0.8rem 2rem;
  border-radius: 0.8rem;
  font-size: large;
}
</style>
