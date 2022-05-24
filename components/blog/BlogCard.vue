<template>
  <nuxt-link class="card-link" :to="`/blog/${title}`">
    <div class="card-container">
      <div class="img-wrapper">
        <img :src="imgUrl" :alt="title" class="card-img" />
      </div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ excerpt }}</p>

      <div class="date-read-time-wrapper">
        <span class="date">{{ date }} &#45; </span>
        <span class="read-time">{{ readTime }} </span>
        <span class="card-arr">&rarr;</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      default: '',
    },
    excerpt: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    readTime: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card-link {
  text-decoration: none;
}
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  padding: 2rem 2.3rem;
  background: #ffffff;
  box-shadow: 0px 50.2079px 59.9498px rgba(55, 52, 169, 0.07),
    0px 19.3394px 19.0951px rgba(55, 52, 169, 0.0425185),
    0px 10.0416px 9.74184px rgba(55, 52, 169, 0.035);
  .img-wrapper {
    max-width: 240px;

    .card-img {
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .card-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: -0.055em;
    color: map-get($map: $text, $key: dark-800);
  }

  .card-desc {
    font-weight: 300;
    font-size: 13.0879px;
    line-height: 148.1%;
    /* or 19px */

    letter-spacing: -0.005em;
    color: map-get($map: $text, $key: dark-300);
  }

  .date-read-time-wrapper {
    font-weight: 600;
    font-size: 9.81595px;
    line-height: 148.1%;
    /* identical to box height, or 15px */

    letter-spacing: 0.105em;
    color: map-get($map: $text, $key: dark-300);

    .card-arr {
      line-height: 100%;
      font-size: 1.2rem;
    }
  }
}
</style>
