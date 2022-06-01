<template>
  <div class="card-container">
    <div class="img-wrapper">
      <img :src="imgUrl" :alt="clientName" class="card-img" />
    </div>
    <div class="card-wrapper">
      <div class="content-wrapper">
        <BareQuotes class="quotes-decor" />
        <p class="testimonial">
          {{ testimonial }}
        </p>
        <div class="text-wrapper">
          <div class="inner-content">
            <div class="review-wrapper">
              <StarSvg v-for="(_, index) in Array(noOfStars)" :key="index" />
            </div>
            <h3 class="client-name">{{ clientName }}</h3>
            <p class="business-name">{{ businessName }}</p>
          </div>
        </div>
      </div>
      <span class="business-name-decor">{{ businessName }}</span>
      <div class="custom-shape-divider-top-1653389732">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import BareQuotes from './BareQuotes.vue'
import StarSvg from './StarSvg.vue'
export default {
  components: { BareQuotes, StarSvg },
  props: {
    clientName: {
      type: String,
      default: '',
    },
    businessName: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      default: '',
    },
    testimonial: {
      type: String,
      default: '',
    },
    noOfStars: {
      type: Number,
      default: 2,
    },
  },
}
</script>

<style lang="scss" scoped>
$border-radius: 1rem;

.card-container {
  @include mq(md) {
    display: flex;
    flex-wrap: nowrap;
  }
  margin-top: 2rem;
  .img-wrapper {
    max-width: 450px;

    @include mq(md) {
      max-width: 550px;

      margin-right: -13rem;
    }
    overflow: hidden;
    z-index: -1;

    .card-img {
      width: 100%;
      object-fit: contain;
    }
  }
}
.custom-shape-divider-top-1653389732 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  border-radius: $border-radius;
}

.custom-shape-divider-top-1653389732 svg {
  position: relative;
  display: none;
  width: 180%;
  transform: rotate(180deg);

  height: 60px;
  @include mq(xs) {
    display: block;
    height: 100px;
  }

  @include mq(md) {
    height: 130px;
  }
}

.custom-shape-divider-top-1653389732 .shape-fill {
  fill: #007be5;
}
.card-wrapper {
  max-width: 550px;
  position: relative;
  margin-top: 1.9rem;
  padding-bottom: 1rem;
  @include mq(xs) {
    padding-bottom: 3rem;
  }
  @include mq(md) {
    min-width: 400px;
    min-height: 300px;
  }
  margin-bottom: 3rem;
  border-radius: $border-radius;
  background-color: map-get($map: $colors, $key: light-300);

  @include mq(md) {
    filter: drop-shadow(0px 67px 80px rgba(55, 52, 169, 0.07))
      drop-shadow(0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185))
      drop-shadow(0px 13.4px 13px rgba(55, 52, 169, 0.035));
  }
  .quotes-decor {
    position: absolute;
    width: 1.5rem;

    @include mq(md) {
      width: 2rem;
    }
  }

  .business-name-decor {
    display: none;
    @include mq(xs) {
      display: inline;
      color: map-get($map: $text, $key: light-300);
      position: absolute;
      bottom: 1.5rem;
      left: 2rem;
      z-index: 2;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.2em;
    }
    @include mq(md) {
      font-size: 23.0872px;
      line-height: 28px;
    }
  }
  .content-wrapper {
    padding: 1.5rem 1.6rem;

    .testimonial {
      margin-top: 2.5rem;
      @include mq(xs) {
        margin-left: 1rem;
      }
      font-weight: 400;
      font-size: 1.155rem;
      line-height: 1.2em;
      color: map-get($map: $text, $key: dark-600);
    }

    .text-wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      padding-right: 2rem;
      align-items: flex-end;

      .client-name {
        font-weight: 800;
        font-size: 20.7785px;
        line-height: 25px;
        letter-spacing: -0.03em;
        margin-top: 10px;
        color: map-get($map: $text, $key: dark-800);
      }
      .business-name {
        font-weight: 400;
        font-size: 1.155rem;
        line-height: 1.1em;
        margin-top: 4px;
        color: map-get($map: $text, $key: dark-600);
      }
    }

    /* media queries */
    @include mq(xs) {
      padding: 1.5rem 2rem;
    }
    @include mq(md) {
      padding: 2.4rem 4.125rem;
    }
  }
}
</style>
