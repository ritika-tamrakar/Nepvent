<template>
  <main class="clients-container">
    <div class="title-wrapper">
      <h1 class="title">Brands we work with</h1>
    </div>
    <!-- {{ clientList }} -->
    <div v-if="clientList" class="sections-cards-wrapper">
      <div
        v-for="section in Object.keys(clientList)"
        :key="section"
        class="header"
      >
        <div
          v-if="clientList[section].length > 0"
          class="section-cards-wrapper"
        >
          <h2 class="section-header">{{ section.toUpperCase() }}</h2>
          <div class="client-cards-wrapper">
            <ClientCard
              v-for="item in clientList[section]"
              :key="item.id"
              :client-name="item.restaurantName"
              :contact="item.primaryPhoneNumber"
              :location="item.location"
            />
          </div>
        </div>
      </div>
    </div>
    <infinite-loading
      v-if="clientList"
      spinner="spiral"
      @infinite="infiniteScroll"
    ></infinite-loading>
  </main>
</template>

<script>
import ClientCard from '../../components/clients/ClientCard.vue'
export default {
  name: 'ClientsPage',
  components: { ClientCard },
  data() {
    return {
      clientList: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: [],
        l: [],
        m: [],
        n: [],
        o: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        u: [],
        v: [],
        w: [],
        x: [],
        y: [],
        z: [],
      },
      currentPage: 1,
    }
  },
  // async fetch() {
  //   try {
  //     const { data } = await this.$axios.$get(
  //       `/api/client-list?page=${this.currentPage}`
  //     )

  //     // eslint-disable-next-line no-console
  //     console.log({ data })
  //     const dataList = data?.items
  //     const temp = {
  //       a: [],
  //       b: [],
  //       c: [],
  //       d: [],
  //       e: [],
  //       f: [],
  //       g: [],
  //       h: [],
  //       i: [],
  //       j: [],
  //       k: [],
  //       l: [],
  //       m: [],
  //       n: [],
  //       o: [],
  //       p: [],
  //       q: [],
  //       r: [],
  //       s: [],
  //       t: [],
  //       u: [],
  //       v: [],
  //       w: [],
  //       x: [],
  //       y: [],
  //       z: [],
  //     }
  //     for (const item of dataList) {
  //       const firstLetter = String(item.restaurantName).toLowerCase()[0]
  //       temp[firstLetter].push(item)
  //     }
  //     this.clientList = temp
  //   } catch (e) {}
  // },

  methods: {
    getSectionedList(dataList) {
      const temp = {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: [],
        l: [],
        m: [],
        n: [],
        o: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        u: [],
        v: [],
        w: [],
        x: [],
        y: [],
        z: [],
      }
      for (const item of dataList) {
        const firstLetter = String(item.restaurantName).toLowerCase()[0]
        temp[firstLetter].push(item)
      }
      return temp
    },

    infiniteScroll($state) {
      try {
        setTimeout(
          () =>
            this.$axios
              .$get(`/api/client-list?page=${this.currentPage}`)
              .then(({ data }) => {
                const dataList = data?.items

                for (const item of dataList) {
                  const firstLetter = String(
                    item.restaurantName
                  ).toLowerCase()[0]
                  this.clientList[firstLetter].push(item)
                }
                const meta = data?.meta

                const { totalPages } = meta
                if (this.currentPage < totalPages) {
                  console.log(this.currentPage)
                  this.currentPage += 1
                  $state.loaded()
                } else {
                  $state.complete()
                }
              }),
          500
        )
      } catch (e) {}
    },
  },
}
</script>

<style lang="scss" scoped>
.sections-cards-wrapper {
  padding: 2rem 0;
}
.clients-container {
  @include container();
  padding: 0 var(--horizontal-padding);

  .client-cards-wrapper {
    padding: 1rem 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: left;
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
