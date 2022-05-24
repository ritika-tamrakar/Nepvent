<template>
  <div>{{ clientName }}</div>
</template>

<script>
export default {
  props: {
    clientName: {
      type: String,
      default: '',
    },
    businessName: {
      type: String,
      default: '',
    },
    testimonial: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
