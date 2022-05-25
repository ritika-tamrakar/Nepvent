<template>
  <main class="clients-container">
    <div class="title-wrapper">
      <h1 class="title">Brands we work with</h1>
    </div>

    <div class="client-cards-wrapper">
      <ClientCard
        v-for="(
          { clientName, contact, location, imgUrl }, index
        ) in clientsList"
        :key="index"
        :client-name="clientName"
        :contact="contact"
        :location="location"
        :img-url="imgUrl"
      />
    </div>
  </main>
</template>

<script>
import ClientCard from '../../components/clients/ClientCard.vue'
export default {
  name: 'ClientsPage',
  components: { ClientCard },
  data() {
    return {
      clientsList: [
        {
          clientName: 'Catmandu Foodland Restaurant and Bar ',
          contact: '986-0108771',
          location: 'Durbar Square, Bhaktapur',
          imgUrl: 'https://menu.nepvent.com/client/aalucha.jpeg',
        },

        {
          clientName: 'Alucha',
          contact: '986-0108771',
          location: 'Durbar Square, Bhaktapur',
          imgUrl: 'https://menu.nepvent.com/client/aalucha.jpeg',
        },
        {
          clientName: 'Catmandu Foodland Restaurant and Bar ',
          contact: '986-0108771',
          location: 'Durbar Square, Bhaktapur',
          imgUrl: 'https://menu.nepvent.com/client/aalucha.jpeg',
        },

        {
          clientName: 'Catmandu Foodland Restaurant and Bar ',
          contact: '986-0108771',
          location: 'Durbar Square, Bhaktapur',
          imgUrl: 'https://menu.nepvent.com/client/aalucha.jpeg',
        },

        {
          clientName: 'Alucha',
          contact: '986-0108771',
          location: 'Durbar Square, Bhaktapur',
          imgUrl: 'https://menu.nepvent.com/client/aalucha.jpeg',
        },
        {
          clientName: 'Catmandu Foodland Restaurant and Bar ',
          contact: '986-0108771',
          location: 'Durbar Square, Bhaktapur',
          imgUrl: 'https://menu.nepvent.com/client/aalucha.jpeg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.clients-container {
  @include container();
  padding: 0 var(--horizontal-padding);

  .client-cards-wrapper {
    margin-top: 1.65rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .title-wrapper {
    max-width: fit-content;
    .title {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 138.6%;
      letter-spacing: 0.005em;
      position: relative;

      @include mq(md) {
        font-size: 2.375rem;
      }

      &::after {
        position: absolute;
        bottom: -5px;
        left: 0;
        content: '';
        width: 110%;
        background-color: map-get($map: $colors, $key: highlight);
        height: 5px;
        border-radius: 10px;
      }
    }
  }
}
</style>
