<template>
  <div class="container">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
.container {
  @include font-family();
  max-width: 1360px;
  margin: 0 auto;
}
</style>
