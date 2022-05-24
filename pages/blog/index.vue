<template>
  <main class="blogs-container">
    <h2 class="blogs-title">Nepvent Gallery of Blog</h2>

    <GridContainer>
      <BlogCard
        v-for="(blog, index) in blogData"
        :key="index"
        :title="blog.title"
        :img-url="blog.imgUrl"
        :excerpt="blog.excerpt"
        :date="blog.date"
        :read-time="blog.readTime"
      />
    </GridContainer>
  </main>
</template>

<script>
import GridContainer from '../../components/blog/GridContainer.vue'
import BlogCard from '../../components/blog/BlogCard.vue'
export default {
  name: 'BlogIndexPage',
  components: { GridContainer, BlogCard },
  data() {
    return {
      blogData: [
        {
          title: 'The Three-body Problem in Software Development',
          imgUrl:
            'https://images.unsplash.com/photo-1638913974071-ad0045d13691?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
          excerpt:
            "From self-described free speech advocates like Elon Musk to more conscientious execs, the tech industry's silence is deafening",
          date: 'May 17',
          readTime: '8 min read',
        },
        {
          title: 'The Three-body Problem in Software Development',
          imgUrl:
            'https://images.unsplash.com/photo-1638913974071-ad0045d13691?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
          excerpt:
            "From self-described free speech advocates like Elon Musk to more conscientious execs, the tech industry's silence is deafening",
          date: 'May 17',
          readTime: '8 min read',
        },
        {
          title: 'The Three-body Problem in Software Development',
          imgUrl:
            'https://images.unsplash.com/photo-1638913974071-ad0045d13691?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
          excerpt:
            "From self-described free speech advocates like Elon Musk to more conscientious execs, the tech industry's silence is deafening",
          date: 'May 17',
          readTime: '8 min read',
        },
        {
          title: 'The Three-body Problem in Software Development',
          imgUrl:
            'https://images.unsplash.com/photo-1638913974071-ad0045d13691?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
          excerpt:
            "From self-described free speech advocates like Elon Musk to more conscientious execs, the tech industry's silence is deafening",
          date: 'May 17',
          readTime: '8 min read',
        },
        {
          title: 'The Three-body Problem in Software Development',
          imgUrl:
            'https://images.unsplash.com/photo-1638913974071-ad0045d13691?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
          excerpt:
            "From self-described free speech advocates like Elon Musk to more conscientious execs, the tech industry's silence is deafening",
          date: 'May 17',
          readTime: '8 min read',
        },
        {
          title: 'The Three-body Problem in Software Development',
          imgUrl:
            'https://images.unsplash.com/photo-1638913974071-ad0045d13691?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
          excerpt:
            "From self-described free speech advocates like Elon Musk to more conscientious execs, the tech industry's silence is deafening",
          date: 'May 17',
          readTime: '8 min read',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blogs-container {
  @include container();
  padding: 3rem 1rem;
  .blogs-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.4em;
    word-break: keep-all;
    letter-spacing: 0em;
    text-align: left;
    color: map-get($map: $text, $key: light-200);
    padding: 0.3em 0.8em;
    max-width: max-content;
    margin: auto;

    box-shadow: 0px 12.275838851928711px 11.909395217895508px 0px #3734a909,
      0px 23.642356872558594px 23.343774795532227px 0px #3734a90b,
      0px 61.37919616699219px 73.28858947753906px 0px #3734a912;
    border-radius: 5px;

    background: linear-gradient(
      24.29deg,
      #007be5 -2.04%,
      #1790ea 42.15%,
      #67d9fa 145.27%
    );

    @media (min-width: map-get($map: $breakpoints , $key: md)) {
      font-size: 2rem;
    }
  }
}
</style>
