<template>
  <section class="container">
    <div class="hide-overflow">
      <bg-svg class="bg-svg" />
      <div class="content-container">
        <div class="text-content">
          <h2 class="title">Restaurant Management Like Clockwork</h2>
          <p class="subtitle">
            Fine-tune how your restaurant operates with Nepvent's Restaurant
            Management System.
          </p>
          <div class="cta-wrapper">
            <button class="cta">Get Started</button>
          </div>
        </div>
        <div class="img-wrapper">
          <div class="hero-pic-container">
            <img
              src="~/assets/images/hero-pic.png"
              alt="hero image"
              class="hero-pic"
            />
            <img
              src="~/assets/images/hero-pic-sub-1.svg"
              alt=""
              class="pic-sub-1"
            />
            <img
              src="~/assets/images/hero-pic-sub-2.svg"
              alt=""
              class="pic-sub-2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BgSvg from './BgSvg.vue'
export default {
  name: 'HeroSection',
  components: { BgSvg },
}
</script>

<style lang="scss" scoped>
.content-container {
  @include container();
  padding: 0 var(--horizontal-padding);
}

.container {
  position: relative;
  height: auto;
}
.hide-overflow {
  overflow: hidden;
}
.bg-svg {
  position: absolute;
  bottom: 0px;
}

.cta-wrapper {
  margin-top: 1.75rem;
  display: flex;
  justify-content: center;

  @media (min-width: map-get($map: $breakpoints, $key: sm)) {
    display: block;
  }
}
.cta {
  @include reset-btn();
  border-radius: 10px;
  padding: 0.8rem 3rem;
  font-size: 0.9rem;
  width: 100%;
  max-width: 400px;
  color: map-get($map: $text, $key: light-300);
  font-weight: 700;
  background: linear-gradient(
    -10.29deg,
    #007be5 -2.04%,
    #1790ea 42.15%,
    #67d9fa 145.27%
  );
}

.text-content {
  margin-top: 1.75rem;
  .title {
    @include text-title();
  }
  .subtitle {
    @include text-sub-400();
    margin-top: 1.25rem;
  }
}

.img-wrapper {
  margin-top: 3rem;
  .hero-pic {
    width: 100%;
    max-width: 400px;
  }

  .hero-pic-container {
    position: relative;
  }
  .pic-sub-1 {
    width: 250px;
    position: absolute;
    top: 4rem;
    left: -4.5rem;
  }

  .pic-sub-2 {
    width: 250px;

    position: absolute;
    bottom: -2rem;
    left: 7rem;
  }
}

/* styles for screens > md breakpoint */
@media (min-width: map-get($map: $breakpoints, $key: md)) {
  .content-container {
    display: grid;
    grid-template-columns: minmax(300px, 630px) minmax(400px, 600px);
    gap: 2rem;
    justify-items: center;
    font-size: 2rem;
    height: fit-content;
  }

  .text-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 1rem;

    .subtitle {
      margin-top: 1.5rem;
    }

    .cta-wrapper {
      .cta {
        padding: 1rem 2rem;
        max-width: fit-content;
        font-size: 1rem;
        border-radius: 50px;
      }
    }
  }

  .img-wrapper {
    width: 100%;
    padding-right: 2em;
    display: flex;

    flex-direction: column;
    align-items: flex-end;
    .hero-pic-container {
      position: relative;
    }

    .hero-pic {
      width: 300px;
    }

    .pic-sub-1 {
      width: 250px;
      position: absolute;
      top: 5rem;
      left: -10rem;
    }

    .pic-sub-2 {
      width: 250px;

      position: absolute;
      bottom: 0rem;
      right: -7rem;
    }

    @media (min-width: map-get($map: $breakpoints, $key: xl)) {
      .hero-pic {
        width: 500px;
      }

      .pic-sub-1 {
        width: 350px;
        position: absolute;
        top: 5rem;
        left: -10rem;
      }

      .pic-sub-2 {
        width: 350px;

        position: absolute;
        bottom: 0rem;
        right: -7rem;
      }
    }
  }
}
</style>
