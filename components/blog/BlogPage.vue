<template>
  <div class="blog-styles" v-html="cleanMessage()"></div>
</template>

<script>
export default {
  name: 'BlogPage',
  props: {
    htmlString: {
      type: String,
      default: '',
    },
  },
  methods: {
    cleanMessage() {
      return this.$sanitize(this.htmlString)
    },
  },
}
</script>

<style lang="scss">
.blog-styles {
  font-size: 16px;
  padding: 2em 0;
  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    padding: 0.6em 0;
    line-height: 1.5em;
  }

  h1 {
    font-size: 1.8em;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.2em;
  }

  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.8em;
  }
  h6 {
    font-size: 0.8em;
  }

  @media (min-width: map-get($map: $breakpoints, $key: md)) {
    padding: 3em 0;
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 2.3em;
    }

    h3 {
      font-size: 2em;
    }

    h4 {
      font-size: 1.8em;
    }
    h5 {
      font-size: 1.5em;
    }
    h6 {
      font-size: 1em;
    }
  }

  p {
    font-weight: 400;
    font-size: 1em;
    line-height: 148.1%;
    margin-top: 0.8em;
  }

  p {
    overflow: hidden;
    img {
      max-width: 760px;
      max-height: 500px;
      height: 100%;
      object-fit: cover;
    }
  }

  ul,
  ol {
    margin-left: 2em;

    li {
      list-style-type: disc;
      margin-top: 0.8em;
    }
  }

  blockquote {
    margin-top: 1.8em;
    padding: 0.9em 1em;
    border-left: 0.3em solid black;
    background: #f5f5f6;

    font-style: italic;

    p {
      margin: 0;
    }
  }
}
</style>
