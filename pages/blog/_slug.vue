<template>
  <article class="page-container">
    <BlogPage
      read-time="2 min read"
      created-at="Aug 19, 2021"
      :title="slug"
      hero-pic="https://images.unsplash.com/photo-1651156755808-80a7857ac6b1?ixlib=rb-1.2.1&amp;raw_url=true&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170"
      description="Sanity.io lets me work with structured content. That means I can add more content types."
      html-string="
<h3>heading</h3>
<p>Sanity.io lets me work with structured content. That means I can add more content types. Who knows, I might add my portfolio, maybe a podcast, some products that I need to market, or my poetry collection (that I totally have)! I can even connect other frontends to my Sanity project when I find that new framework I just need to try out.</p>
<p>But firstly, how could I make this blog my own special place on the internet?</p>
<p>I should probably check out the tutorial videos on how to get started with customizing both the content schema and the frontend accordingly.</p>
<ul>
<li>Listitem 1</li>
<li>list item 2</li>
<li>list item 3</li>
</ul>
<blockquote>
<p>this is a blockquote</p>
</blockquote>"
    />
  </article>
</template>

<script>
import BlogPage from '../../components/blog/BlogPage.vue'
export default {
  components: { BlogPage },
  asyncData({ params }) {
    const { slug } = params

    return {
      slug,
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
