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
      <li><a class="active" href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Feedback</a></li>
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
  padding: 0 var(--horizontal-padding);
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  display: block;

  a {
    text-decoration: none;
  }
}

.nav-checkbtn[type='checkbox']:checked ~ .nav-links {
  display: block;
  position: absolute;
  height: calc(100vh - 80px);
  font-size: 1rem;
  color: black;
  top: var(--nav-height);
  padding: 0 var(--horizontal-padding);

  background-color: aqua;
}

.nav-checkbtn {
  display: none;
}

.nav-hamburger {
  font-size: 1.5rem;
  justify-self: flex-end;
}
</style>
