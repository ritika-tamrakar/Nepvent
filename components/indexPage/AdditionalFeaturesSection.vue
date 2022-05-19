<template>
  <section class="feature-container">
    <h2 class="f-title">Additional Features</h2>
    <p class="f-desc">
      While it looks like your average POS system on the surface, our RMS comes
      with all the gadgetry your restaurant could need.
    </p>

    <div class="f-cards-wrapper">
      <IconCards
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.desc"
        :icon="card.icon"
      />
    </div>
  </section>
</template>

<script>
import IconCards from './IconCards.vue'
export default {
  name: 'AdditionalFeaturesSection',
  components: { IconCards },
  data() {
    return {
      cards: [
        {
          title: 'Order Management',
          desc: 'Manage all your kitchen/bar orders from a single device with timely notifications for new/completed ones.',
          icon: ['fa', 'sliders'],
        },
        {
          title: 'Analytics',
          desc: "Find visual reports of your restaurant's sales & inventory totals to uncover critical problems and what's causing them.",
          icon: ['fa', 'chart-line'],
        },
        {
          title: 'Great Support',
          desc: 'With our support team available all week long during business hours, you can operate without any concern.',
          icon: ['fa', 'headset'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.feature-container {
  @include container();

  margin-top: 5.25rem;

  padding: 0 var(--horizontal-padding);
  text-align: center;
  .f-title {
    font-weight: 700;
    font-size: 40px;
    line-height: 55px;
  }
  .f-desc {
    font-weight: 300;
    font-size: 20px;
    line-height: 27px;
    margin-top: 1.625rem;
  }
  .f-cards-wrapper {
    margin-top: 1.76rem;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
