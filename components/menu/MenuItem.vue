<template>
  <div class="card-wrapper">
    <div class="img-wrapper">
      <img :src="imgUrl" :alt="dishName" class="card-img" />
    </div>
    <div class="text-content">
      <h3 class="card-title">{{ dishName }}</h3>
      <p class="card-desc">{{ description }}</p>

      <span class="price-tag">
        <span class="price-icon">
          <fa :icon="['fa', 'money-bill-wave']" />
        </span>
        {{ price }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: { default: '', type: String },
    dishName: { default: '', type: String },
    description: { default: '', type: String },
    price: { default: '', type: String },
  },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  margin-top: 2rem;
  @include mq(md) {
    display: flex;
    gap: 1rem;
  }
  .img-wrapper {
    max-width: 128px;
    overflow: hidden;
    min-width: 90px;

    .card-img {
      width: 100%;
      object-fit: contain;
    }
  }

  .text-content {
    .card-title {
      margin-top: 1rem;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 148.1%;

      @include mq(md) {
        margin-top: 0rem;
      }

      letter-spacing: 0.095em;
    }

    .card-desc {
      margin-top: 1rem;
      font-weight: 300;
      font-size: 14px;
      line-height: 148.1%;
      letter-spacing: 0.06em;
      @include color($text, dark-600);
    }

    .price-tag {
      display: flex;
      justify-content: flex-end;
      font-weight: 300;
      font-size: 14px;
      line-height: 148.1%;
      letter-spacing: 0.06em;
      @include color($text, dark-600);
      padding-top: 10px;
      margin-left: auto;
      .price-icon {
        margin-right: 0.5rem;
        @include color($colors, secondary);
        & > svg {
          transform: rotate(20.39deg);
        }
      }
    }
  }
}
</style>
