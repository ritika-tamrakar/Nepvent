<template>
  <div class="container">
    <NavBar />
    <Nuxt class="content" />
    <FooterMain />
  </div>
</template>

<script>
import FooterMain from '../components/FooterMain.vue'
export default {
  name: 'DefaultLayout',
  components: { FooterMain },
}
</script>

<style lang="scss" scoped>
.container {
  @include font-family();
  @include padding-var();

  overflow-x: hidden;
}

.content {
  height: 100%;
}
</style>
