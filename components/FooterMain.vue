<!-- have to refactor this  -->
<template>
  <footer class="container">
    <section class="content-container">
      <div class="flex-wrapper">
        <div class="logo-container flex-child">
          <img
            v-lazy="
              `https://res.cloudinary.com/dudbkhnf3/image/upload/v1633346810/nepvent-company-site/logo-white.png`
            "
            alt="logo"
          />
          <span class="logo-tag-line"
            >Nepal's Best Restaurant Management System</span
          >
        </div>
        <div class="flex-child">
          <h4 class="contact-info sub-title">Contact Information</h4>
          <div class="social-icon-wrappper">
            <fa :icon="['fas', 'phone-square']" />
            9818000015, 9801105225
          </div>
          <div class="social-icon-wrappper">
            <fa :icon="['fas', 'envelope']" />
            contact@nepvent.com
          </div>
        </div>
        <div class="flex-child">
          <h4 class="sub-title contact-info">Follow Us On</h4>
          <div class="social-links-wrapper">
            <fa
              :icon="['fab', 'facebook']"
              class="links"
              @click="openLink('https://www.facebook.com/nepventofficial/')"
            />
            <fa
              :icon="['fab', 'instagram']"
              class="links"
              @click="openLink('https://www.instagram.com/nepvent.rms/')"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="qr-container">
      <h4 class="qr-title">Download App</h4>
      <div class="">
        <img
          v-lazy="
            `https://res.cloudinary.com/dudbkhnf3/image/upload/v1635661574/nepvent-company-site/qr_xhml0a.svg`
          "
          alt="qr"
          class="qr-code"
        />
      </div>
    </section>
    <section class="copyright-wrapper">Copyright © 2022, Nepvent</section>
  </footer>
</template>

<script>
export default {
  name: 'FooterMain',
  methods: {
    openLink(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: map-get($map: $colors, $key: dark-800);
  margin-top: 3rem;
  color: rgb(227, 236, 236);
}

.content-container {
  padding: 50px var(--horizontal-padding);

  .logo-tag-line {
    display: block;
    margin-top: 30px;
    max-width: calc(100% - var(--horizontal-padding));
  }

  .contact-info {
    margin: 10px 0 20px;
  }
  .sub-title {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .social-icon-wrappper {
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    line-height: 2rem;
    align-items: center;
  }

  .social-links-wrapper {
    font-size: 1.8rem;
    display: flex;
    gap: 10px;

    .links {
      cursor: pointer;
    }
  }
  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .flex-child {
      width: 100%;
      flex-grow: 1;

      min-width: 360px;

      @media (min-width: map-get($map: $breakpoints, $key: md)) {
        max-width: 50%;
      }
      @media (min-width: map-get($map: $breakpoints, $key: lg)) {
        max-width: 33.3333%;
      }
    }
  }
}

.qr-container {
  padding: 50px var(--horizontal-padding);

  .qr-title {
    font-size: 2rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
  }
}
.logo-container {
  img {
    width: 200px;
  }
}
.qr-code {
  max-width: 200px;
}
.copyright-wrapper {
  background: darken(map-get($map: $colors, $key: dark-800), 2%);
  color: #fff;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: map-get($map: $breakpoints, $key: md)) {
  .content-container {
    padding: 70px 40px 0px 40px;
    .flex-wrapper {
      gap: 1rem;
    }
  }

  .qr-container {
    padding: 70px 40px;
  }
}

@media (min-width: map-get($map: $breakpoints, $key: lg)) {
  .content-container {
    .flex-wrapper {
      gap: 0rem;
    }
  }
}
</style>
