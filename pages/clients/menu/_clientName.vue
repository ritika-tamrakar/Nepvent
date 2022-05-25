<template>
  <div class="page-container">
    <div class="img-wrapper">
      <img src="" alt="" class="client-logo" />
    </div>

    <div class="text-content">
      <h1 class="client-name">{{ clientName }}</h1>
      <div class="info-wrapper">
        <p class="contact">
          <fa :icon="['fa', 'phone-flip']" />
          &ThinSpace;
          {{ contact }}
        </p>
        <p class="location">
          <fa :icon="['fa', 'location-dot']" />
          &ThinSpace;
          {{ location }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const { clientName } = params
    return {
      clientName,
      contact: '986-0108771',
      location: 'Durbar Square, Bhaktapur',
    }
  },
}
</script>

<style lang="scss" scoped></style>
