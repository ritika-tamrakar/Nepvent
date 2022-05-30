<template>
  <nuxt-link class="card-link" :to="`/blog/${title}`">
    <div class="card-container">
      <div class="img-wrapper">
        <img :src="imgUrl" :alt="title" class="card-img" />
      </div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ excerpt }}</p>
      <div class="tag-date-time-wrapper">
        <div class="category-tag">{{ category }}</div>
        <div class="date-read-time-wrapper">
          <span class="date">{{ date }} &#45; </span>
          <span class="read-time">{{ readTime }} </span>
          <span class="card-arr">&rarr;</span>
        </div>
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
      default:
        'https://images.unsplash.com/photo-1638913974071-ad0045d13691?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
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
    category: {
      type: String,
      default: 'nepvent',
    },
  },
}
</script>

<style lang="scss" scoped>
.tag-date-time-wrapper {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: left;
}
.category-tag {
  background-color: map-get($map: $colors, $key: highlight);
  font-size: 0.85rem;
  width: fit-content;
  @include color($text, light-200);
  padding: 0.2em 0.5em;
  border-radius: 5px;
  margin-top: 5px;
}
.card-link {
  text-decoration: none;
}
.card-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
    --line-height: 25px;
    --no-of-lines: 2;
    font-weight: 700;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: -0.055em;
    color: map-get($map: $text, $key: dark-800);

    line-height: var(--line-height);
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: var(--no-of-lines);
    max-height: calc(var(--line-height) * var(--no-of-lines));
  }

  .card-desc {
    --line-height: 19px;
    --no-of-lines: 4;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: -0.005em;
    color: map-get($map: $text, $key: dark-300);

    line-height: var(--line-height);
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: var(--no-of-lines);
    max-height: calc(var(--line-height) * var(--no-of-lines));
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
