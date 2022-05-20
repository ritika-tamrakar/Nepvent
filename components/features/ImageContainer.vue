<template>
  <div class="img-container">
    <div class="img-wrapper">
      <img :src="url" :alt="alt" class="feature-img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default:
        'https://res.cloudinary.com/dudbkhnf3/image/upload/v1633346809/nepvent-company-site/img-1.png',
    },
    alt: {
      type: String,
      default: 'nepvent feature image',
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin style-boxes {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: map-get($map: $text, $key: light-300);
  z-index: -1;
}
.img-container {
  margin-top: 4rem;

  .img-wrapper {
    position: relative;
    &::before {
      @include style-boxes();
      content: '';
      bottom: -3rem;
      left: -4rem;
    }
    &::after {
      @include style-boxes();
      content: '';
      top: -3rem;
      right: -4rem;
    }
  }
  .feature-img {
    max-width: 250px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: map-get($map: $breakpoints, $key: md)) {
  .img-container {
    margin-top: 0rem;
  }
}
</style>
