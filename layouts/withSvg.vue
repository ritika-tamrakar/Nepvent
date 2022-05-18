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
  overflow-x: hidden;
}
</style>
