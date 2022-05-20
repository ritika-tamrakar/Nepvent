<template>
  <article class="page-container">blog page</article>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      slug: params.slug,
    }
  },

  head() {
    return {
      title: this.slug,
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 var(--horizontal-padding);
}
</style>
