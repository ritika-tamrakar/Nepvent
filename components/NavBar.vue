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
    <label for="check" class="nav-hamburger"></label>
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

<style scoped>
.nav-links {
  display: none;
}

.nav-checkbtn[type='checkbox']:checked ~ .nav-links {
  display: block;
}

.nav-hamburger {
  position: relative;
}

.nav-hamburger::after {
  content: '';
  position: absolute;
  height: 5px;
  width: 10px;
  background-color: black;
}
</style>
