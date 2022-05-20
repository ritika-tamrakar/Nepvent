<template>
  <div class="text-container">
    <h2 class="title">{{ title }}</h2>
    <p class="desc">
      {{ description }}
    </p>
    <p class="sub-desc">
      {{ subDescription }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    subDescription: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  text-align: center;
  font-size: 35px;
  line-height: 57px;
  color: map-get($map: $text, $key: dark-600);
}

@mixin text-desc {
  font-weight: 700;
  font-size: 16px;
  line-height: 143.1%;
  color: map-get($map: $text, $key: dark-600);
}
.desc {
  @include text-desc();
  margin-top: 1.8rem;
}
.sub-desc {
  @include text-desc();
  margin-top: 1.2rem;
}
@media (min-width: map-get($map: $breakpoints, $key: md)) {
  .text-container {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    font-size: 40px;
    text-align: left;
  }

  .desc {
    margin-top: 2.2rem;
  }
  .sub-desc {
    margin-top: 1.5rem;
  }
}
</style>
