<template>
  <div class="stat-item-container">
    <h5 class="value">{{ value }}</h5>
    <h3 class="title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'StatItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.stat-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19px;

  min-width: 210px;
  min-height: 120px;

  max-width: 250px;
  max-height: 150px;

  /* shadows  */
  box-shadow: 0px 13px 13px 0px hsla(242, 53%, 43%, 0.04),
    0px 25px 25px 0px hsla(242, 53%, 43%, 0.04),
    0px 67px 80px 0px hsla(242, 53%, 43%, 0.07);
}
</style>
