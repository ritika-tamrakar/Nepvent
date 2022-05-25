<template>
  <div>{{ clientName }}</div>
</template>

<script>
export default {
  asyncData({ params }) {
    const { clientName } = params
    return {
      clientName,
    }
  },
}
</script>

<style lang="scss" scoped></style>
