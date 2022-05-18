<template>
  <section class="container">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 $container-p-h;
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
}

/* styles for screens > md breakpoint */
@media (min-width: map-get($map: $breakpoints, $key: md)) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: minmax(2rem, 2.25rem);
    justify-items: center;
  }

  .img-wrapper {
    width: 100%;
    .hero-pic {
      width: 100%;
      max-width: 500px;
    }
  }
}
</style>
