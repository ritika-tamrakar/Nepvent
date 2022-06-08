<template>
  <main class="blogs-container">
    <HeaderTitle title="Nepvent Gallery of Blog" />
    <GridContainer>
      <BlogCard
        v-for="blog in blogData"
        :key="blog.id"
        :title="blog.title"
        :excerpt="blog.description"
        :date="$dateFns.format(blog.createdAt, 'PP')"
        :read-time="`${blog.readTime} min read`"
        :category="blog.category.name"
        :img-url="blog.heroImage.url"
      />
    </GridContainer>
    <infinite-loading spinner="spiral" @infinite="infiniteScroll">
      <div slot="no-more">No more message</div>
      <div slot="no-results"></div>
    </infinite-loading>
  </main>
</template>

<script>
import GridContainer from '../../components/blog/GridContainer.vue'
import BlogCard from '../../components/blog/BlogCard.vue'
import HeaderTitle from '../../components/common/HeaderTitle.vue'

export default {
  name: 'BlogIndexPage',
  components: { GridContainer, BlogCard, HeaderTitle },
  data() {
    return {
      blogData: [],
      currentPage: 1,
    }
  },

  methods: {
    createSlug(text) {
      text = text.trim ? text.trim() : text.replace(/^\s+|\s+$/g, '')
      text = text.toLowerCase()
      return text.split(/\s+/).join('-')
    },
    infiniteScroll($state) {
      setTimeout(
        () =>
          this.$axios
            .$get(`/api/Blog?page=${this.currentPage}`)
            .then(({ data }) => {
              this.blogData = this.blogData.concat(data?.items)
              const meta = data?.meta

              const { totalPages } = meta
              if (this.currentPage < totalPages) {
                this.currentPage += 1
                $state.loaded()
              } else {
                $state.complete()
              }
            })
            .catch((e) => {
              console.error(e)
            }),
        500
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.blogs-container {
  @include container();
  padding: 0 1rem;
  min-height: 580px;
}
</style>
