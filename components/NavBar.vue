<template>
  <nav class="nav">
    <div class="nav-logo">
      <img
        class="nav-logo-img"
        src="https://res.cloudinary.com/dudbkhnf3/image/upload/v1633346809/nepvent-company-site/logo.png"
        alt="Nepvent"
        width="150"
      />
    </div>
    <input id="check" type="checkbox" class="nav-checkbtn" />
    <label for="check" class="nav-hamburger">
      <fa :icon="['fa', 'bars']" />
    </label>
    <ul class="nav-links">
      <div class="links-wrapper">
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </div>
      <div class="nav-btn-wrapper">
        <button class="nav-cta">Contact</button>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>
.nav {
  --nav-height: 80px;
  --horizontal-padding: 35px;
  display: flex;
  height: var(--nav-height);
  padding: 0 $container-p-h;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  background-color: #fff;
}

.nav-links {
  display: none;

  a {
    text-decoration: none;
  }
}

.nav-checkbtn[type='checkbox']:checked ~ .nav-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  width: calc(100vw - $container-p-h * 2);
  height: calc(100vh - var(--nav-height) * 2);
  font-size: 1rem;
  top: var(--nav-height);
  padding-top: var(--horizontal-padding);
  background-color: #fff;

  .links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  a {
    font-size: 1.75rem;
    color: map-get($map: $text, $key: dark-600);
  }

  .nav-btn-wrapper {
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
