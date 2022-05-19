<template>
  <div class="card-wrapper">
    <h4 class="card-title">
      {{ title }}
    </h4>
    <div class="card-icon-wrapper">icon</div>
    <p class="card-desc">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'IconCards',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 2.25rem;
  gap: 19px;

  border-radius: 0.8rem;

  max-width: 322px;
  min-width: 280px;

  box-shadow: 0px 13.399999618530273px 13px 0px hsla(242, 53%, 43%, 0.04),
    0px 25.80740737915039px 25.481481552124023px 0px hsla(242, 53%, 43%, 0.04),
    0px 67px 80px 0px hsla(242, 53%, 43%, 0.07);

  .card-title {
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;

    color: map-get($map: $text, $key: dark-800);
  }

  .card-desc {
    font-weight: 300;
    font-size: 1rem;
    line-height: 25px;
    text-align: center;
    color: map-get($map: $text, $key: dark-600);
    max-width: 232px;
  }
}
</style>
