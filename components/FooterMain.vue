<!-- have to refactor this  -->
<template>
  <footer class="container">
    <div class="footer-wrapper">
      <section class="content-container">
        <div class="grid-wrapper">
          <div class="logo-container">
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
          <div class="">
            <h4 class="contact-info sub-title">Contact Information</h4>
            <div class="social-icon-wrappper">
              <fa :icon="['fas', 'phone-square']" />
              9818000015, 9801105225
            </div>
            <div class="social-icon-wrappper">
              <fa :icon="['fas', 'envelope']" />
              contact@nepvent.com
            </div>
            <h4 class="contact-info follow-links follow-title">Follow Us On</h4>
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

          <div class="">
            <h4 class="sub-title">Download App</h4>
            <div class="qr-img-wrapper">
              <img
                v-lazy="
                  `https://res.cloudinary.com/dudbkhnf3/image/upload/v1635661574/nepvent-company-site/qr_xhml0a.svg`
                "
                alt="qr"
                class="qr-code"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
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

.footer-wrapper {
  @include container();
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
  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @include mq(sm) {
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      gap: 1rem;
    }
    @include mq(lg) {
      grid-template-columns: 1.5fr 1.5fr 1fr;
    }

    .follow-links {
      margin-top: 1rem;
    }
    .follow-title {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
}

.qr-img-wrapper {
  margin-top: 1rem;
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

@include mq(md) {
  .content-container {
    padding: 60px 40px;
  }

  .qr-container {
    padding: 70px 40px;
  }
}

@include mq('2xl') {
  .content-container {
    padding: 70px 0;
  }

  .qr-container {
    padding: 70px 0;
  }
}
</style>
