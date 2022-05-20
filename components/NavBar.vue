<template>
  <nav class="nav">
    <div class="nav-logo" @click="toggleHamburger()">
      <nuxt-link to="/">
        <img
          class="nav-logo-img"
          src="https://res.cloudinary.com/dudbkhnf3/image/upload/v1633346809/nepvent-company-site/logo.png"
          alt="Nepvent"
          width="150"
        />
      </nuxt-link>
    </div>
    <input
      id="check"
      type="checkbox"
      :class="[showNav ? 'nav-checkbtn checked' : 'nav-checkbtn']"
    />
    <label for="check" class="nav-hamburger" @click="toggleHamburger()">
      <fa v-if="showHamburger" :icon="['fa', 'bars']" />
      <fa v-else :icon="['fa', 'xmark']" />
    </label>
    <ul class="nav-links">
      <div class="links-wrapper">
        <li @click="toggleHamburger()">
          <nuxt-link to="/features">Features</nuxt-link>
        </li>
        <li @click="toggleHamburger()">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li @click="toggleHamburger()"><a href="#">Clients</a></li>
      </div>
      <div class="nav-btn-wrapper">
        <NavBtn>Contact</NavBtn>
      </div>
    </ul>
  </nav>
</template>

<script>
import NavBtn from './NavBtn.vue'
export default {
  name: 'NavBar',
  components: { NavBtn },
  data() {
    return { showHamburger: true, showNav: false }
  },
  methods: {
    toggleHamburger() {
      this.showHamburger = !this.showHamburger
      this.toggleNav()
    },
    toggleNav() {
      this.showNav = !this.showNav
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  @include container();
  --nav-height: 80px;
  display: flex;
  height: var(--nav-height);
  padding: 0 var(--horizontal-padding);
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 9999;

  background-color: #fff;
}

.nav-links {
  /* display: none; */
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  top: -9999;
  a {
    text-decoration: none;
    color: map-get($map: $text, $key: dark-600);

    &:active {
      color: map-get($map: $text, $key: active);
    }
  }
}

.nav-checkbtn[type='checkbox'].checked ~ .nav-links {
  height: auto;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  width: calc(100vw - var(--horizontal-padding) * 2);
  left: 0;
  padding: var(--horizontal-padding);
  font-size: 1rem;
  top: var(--nav-height);
  height: 70vh;
  background-color: #fff;

  .links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  a {
    font-size: 1.75rem;
  }

  .nav-btn-wrapper {
    margin-top: 4rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 2rem;
  }
}

.nav-checkbtn {
  display: none;
}

.nav-hamburger {
  font-size: 1.5rem;
  justify-self: flex-end;
}

/* styles for screens > md breakpoint */
@media (min-width: map-get($map: $breakpoints, $key: md)) {
  .nav-hamburger {
    display: none;
  }

  .nav-links {
    position: unset;
    height: auto;
    opacity: 1;
    display: grid;
    gap: 1rem;
    flex: 1;

    grid-template-columns: 1fr 5rem;

    font-size: larger;

    @media (max-width: map-get($map: $breakpoints, $key: xl)) {
      font-size: large;
    }

    .links-wrapper {
      display: flex;
      gap: 2em;
      align-items: center;
      justify-content: center;
    }

    .nav-btn-wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
