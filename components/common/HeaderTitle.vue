<template>
  <div class="title-wrapper">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.title-wrapper {
  max-width: fit-content;
  margin-top: 2rem;
  .title {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 138.6%;
    letter-spacing: 0.005em;
    position: relative;

    @include mq(md) {
      font-size: 2.375rem;
    }

    &::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      content: '';
      width: 110%;
      background-color: map-get($map: $colors, $key: highlight);
      height: 5px;
      border-radius: 10px;
    }
  }
}
</style>
