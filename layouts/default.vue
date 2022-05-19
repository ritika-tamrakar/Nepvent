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
  @include padding-var();

  overflow-x: hidden;
}
</style>
