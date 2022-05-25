<template>
  <div class="card-wrapper">
    <div class="img-wrapper">
      <img :src="`${imgUrl}`" alt="" class="client-img" />
    </div>
    <div class="text-wrapper">
      <div class="client-name-wrapper">
        <h3 class="client-name">
          {{ clientName }}
        </h3>
      </div>

      <div class="info-wrapper">
        <p class="contact">
          <fa :icon="['fa', 'phone-flip']" />
          &ThinSpace;
          {{ contact }}
        </p>
        <p class="location">
          <fa :icon="['fa', 'location-dot']" />
          &ThinSpace;
          {{ location }}
        </p>
      </div>
    </div>
    <nuxt-link :to="`/clients/menu/${clientName}`" class="menu-link">
      View Menu
      <span class="card-arr">&rarr;</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    clientName: {
      type: String,
      default: '',
    },
    contact: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  padding: 1rem 1.6rem;
  @include mq(xs) {
    height: clamp(160px, 183px, 240px);
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas: '1 2';
    gap: clamp(0.5rem, 1rem, 1.25rem);
  }
  min-width: 200px;

  @include mq(md) {
    min-width: 280px;
  }
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 47.6333px 56.8755px rgba(55, 52, 169, 0.07),
    0px 18.3476px 18.1159px rgba(55, 52, 169, 0.0425185),
    0px 9.52665px 9.24227px rgba(55, 52, 169, 0.035);

  .menu-link {
    margin-left: 1rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 9.31259px;
    line-height: 148.1%;
    /* identical to box height, or 14px */

    letter-spacing: 0.105em;

    /* text/gray */

    color: #96a1a4;

    .card-arr {
      font-size: 1.35rem;
    }
  }

  .text-wrapper {
    margin-top: 1rem;
    grid-area: 1;
    color: map-get($map: $text, $key: dark-600);
  }
  .img-wrapper {
    max-width: 100px;
    margin: auto;

    .client-img {
      width: 100%;
      object-fit: contain;
    }
  }

  .info-wrapper {
    font-size: 0.825rem;
    line-height: 148.1%;
    letter-spacing: 0.01em;
    margin-top: 0.5rem;

    .location {
      margin-top: 0.45rem;
    }
  }

  .client-name-wrapper {
    height: 3.25rem;
    display: flex;
    align-items: center;
    .client-name {
      font-weight: 700;
      font-size: 0.9rem;
      line-height: 148.1%;
      letter-spacing: 0.01em;
      margin-left: 1.5rem;
    }
  }
}
</style>
