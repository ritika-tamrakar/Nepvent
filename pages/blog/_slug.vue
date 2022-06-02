<template>
  <article class="page-container">
    <BlogPage
      :read-time="blog.readTime"
      :created-at="$dateFns.format(blog.createdAt, 'PP')"
      :title="slug"
      :hero-pic="blog.image[0].url"
      :description="blog.description"
      :html-string="blog.body"
    />
  </article>
</template>

<script>
import BlogPage from '../../components/blog/BlogPage.vue'
export default {
  components: { BlogPage },
  async asyncData({ params, $axios }) {
    const { slug } = params

    const { data } = await $axios.$get(`/api/Blog?titleName=${slug}`)

    return {
      slug,
      blog: data?.items[0],
    }
  },
  data() {
    return {
      blog: {},
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
  max-width: 760px;
  margin: 0 auto;
  padding: 0 var(--horizontal-padding);
}
</style>
