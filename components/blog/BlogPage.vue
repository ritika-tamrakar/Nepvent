<template>
  <div class="blog-page">
    <div class="blog-social-icon-bar">
      <ShareNetwork
        class="social-links"
        network="facebook"
        url="https://news.vuejs.org/issues/180"
        title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
        description="This week, I'd like to introduce you to 'Vite', which means 'Fast'. It's a brand new development setup created by Evan You."
        quote="The hot reload is so fast it\'s near instant. - Evan You"
        hashtags="vuejs,vite"
      >
        <fa :icon="['fa-brands', 'facebook-square']" />
      </ShareNetwork>

      <ShareNetwork
        class="social-links"
        network="twitter"
        url="https://news.vuejs.org/issues/180"
        title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
        description="This week, I'd like to introduce you to 'Vite', which means 'Fast'. It's a brand new development setup created by Evan You."
        quote="The hot reload is so fast it\'s near instant. - Evan You"
        hashtags="vuejs,vite"
      >
        <fa :icon="['fa-brands', 'twitter-square']" />
      </ShareNetwork>
      <ShareNetwork
        class="social-links"
        network="whatsapp"
        url="https://news.vuejs.org/issues/180"
        title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
        description="This week, I'd like to introduce you to 'Vite', which means 'Fast'. It's a brand new development setup created by Evan You."
        quote="The hot reload is so fast it\'s near instant. - Evan You"
        hashtags="vuejs,vite"
      >
        <fa :icon="['fa-brands', 'whatsapp-square']" />
      </ShareNetwork>
    </div>
    <article class="blog-content">
      <header class="hero-content">
        <h6 class="created-time">{{ createdAt }}</h6>

        <h1 class="blog-title">{{ title }}</h1>

        <div class="hero-pic-wrapper">
          <img :src="heroPic" :alt="title" class="hero-pic" />
        </div>

        <span class="read-time">{{ readTime }}</span>
      </header>
      <main class="blog-styles" v-html="cleanMessage()"></main>
    </article>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  props: {
    htmlString: {
      type: String,
      default: '',
    },
    readTime: {
      type: String,
      default: '',
    },
    createdAt: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    heroPic: {
      type: String,
      default: '',
    },
    title: {
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
.blog-page {
  @include mq(md) {
    display: flex;
    gap: 2rem;
  }

  .blog-social-icon-bar {
    display: none;
    @include mq(md) {
      display: flex;
      font-size: 1.5rem;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-top: 25%;
      .social-links {
        text-decoration: none;
        @include color($text, dark-600);
      }
    }
  }
}

.hero-content {
  .hero-pic-wrapper {
    overflow: hidden;
    max-width: 760px;
    max-height: 500px;
    .hero-pic {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.blog-styles {
  font-size: 16px;
  padding: 1em 0;
  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    padding: 0.3em 0;
    line-height: 1.2em;
  }

  h1,
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
    padding: 1em 0;
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
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
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
