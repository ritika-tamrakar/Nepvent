<template>
  <div class="page-container">
    <div class="client-info-wrapper">
      <div class="img-wrapper">
        <img :src="imgUrl" :alt="clientName" class="client-logo" />
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
    <div class="options-wrapper">
      <p class="options-header">Select</p>
      <v-select :options="categories" v-model="selectedCategory" />
    </div>

    <div class="menu-wrapper">
      <h5 class="menu-tag">{{ selectedCategory }}</h5>
      <div class="menu-listings">
        <MenuItem
          v-for="(menuItem, index) in menu"
          :key="index"
          :img-url="menuItem.imgUrl"
          :dish-name="menuItem.dishName"
          :price="menuItem.price"
          :description="menuItem.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css'
import MenuItem from '../../../components/menu/MenuItem.vue'
export default {
  components: { MenuItem },
  asyncData({ params }) {
    const { clientName } = params
    return {
      clientName,
    }
  },
  data() {
    return {
      contact: '986-0108771',
      imgUrl: 'https://menu.nepvent.com/storage/logo/catmandu-foodland.jpg',
      location: 'Durbar Square, Bhaktapur',
      categories: ['All', 'Momo'],
      selectedCategory: 'All',
      menu: [
        {
          imgUrl:
            'https://ouch-cdn2.icons8.com/pXA1znY1Yt4-oyZjovbQz6Xu0p51Ajeb4ZFI1htTxfc/rs:fit:256:140/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTgz/L2MzNTA0MzFmLTM0/OWUtNDBhYy05ZWZh/LTViYTE5OGMyY2Ri/Mi5wbmc.png',
          dishName: 'Timmur Aaloo Tareko',
          description:
            'Mildly spiced mashed potatoes, mixed with peas, vegetables and shallow fried',
          price: '325',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  @include container();
  max-width: 1100px;
  padding: 4rem var(--horizontal-padding);

  .img-wrapper {
    max-width: 200px;
    overflow: hidden;

    filter: drop-shadow(0px 97.4625px 116.373px rgba(55, 52, 169, 0.07))
      drop-shadow(0px 37.5411px 37.067px rgba(55, 52, 169, 0.0425185))
      drop-shadow(0px 19.4925px 18.9106px rgba(55, 52, 169, 0.035));
    @include mq(xs) {
      max-width: 250px;
      margin: auto;
    }
    @include mq(md) {
      max-width: 240px;
    }

    .client-logo {
      width: 100%;
      object-fit: contain;
    }
  }

  .client-info-wrapper {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    @include mq(md) {
      flex-direction: row;
      gap: 3rem;
    }
  }

  .text-content {
    @include color($text, dark-600);

    min-width: 200px;
    @include mq(xs) {
      text-align: center;
    }

    @include mq(md) {
      text-align: left;
    }

    @include mq(lg) {
      flex: 1;
    }

    .client-name {
      font-weight: 700;
      font-size: 1.3rem;
      color: inherit;

      @include mq(xs) {
        font-size: 1.5em;
      }

      @include mq(md) {
        font-size: 1.8rem;
      }
      line-height: 1.2em;
      letter-spacing: 0.01em;
    }

    .info-wrapper {
      margin-top: 0.8rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-weight: 700;
      @include mq(xs) {
        justify-content: center;
      }

      @include mq(md) {
        justify-content: unset;
        font-size: 1.25rem;
      }
      line-height: 148.1%;
      letter-spacing: 0.01em;
    }
  }

  .options-wrapper {
    margin-top: 1.6rem;
    max-width: 386px;

    @include mq(xs) {
      margin: auto;
      margin-top: 3rem;
    }

    @include mq(md) {
      margin-top: 3rem;
      margin-left: 18rem;
    }
    .options-header {
      font-weight: 700;
      font-size: 16px;
      line-height: 148.1%;
      letter-spacing: 0.01em;
    }
  }

  .menu-wrapper {
    font-family: 'Roboto Mono', monospace;
    @include mq(md) {
      max-width: 860px;
      margin: auto;
      margin-top: 1.5rem;
    }
    .menu-tag {
      font-weight: 700;
      margin-top: 3rem;
      font-size: 0.9rem;
      line-height: 148.1%;

      letter-spacing: 0.265em;
      position: relative;
      width: fit-content;

      &::after {
        content: '';
        width: 100%;
        position: absolute;
        bottom: -5px;
        left: 0rem;
        height: 3px;
        border-radius: 5px;
        background-color: map-get($map: $colors, $key: secondary);
      }
    }

    .menu-listings {
      margin-top: 1.5rem;
      margin-left: 1rem;
    }
  }
}
</style>
