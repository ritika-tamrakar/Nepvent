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

        <span class="read-time">
          <div class="category-tag">{{ category }}</div>
          {{ readTime }}
        </span>
        <div class="hero-pic-wrapper">
          <img :src="heroPic" :alt="title" class="hero-pic" />
        </div>
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
    category: {
      type: String,
      default: 'nepvent',
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
  position: relative;
  @include mq(md) {
    display: flex;
    gap: 2rem;
  }

  .blog-social-icon-bar {
    position: absolute;
    display: flex;
    right: 0;
    top: 2rem;
    gap: 0.5rem;
    font-size: 1.125rem;

    .social-links {
      text-decoration: none;
      @include color($text, dark-600);
    }
    @include mq(md) {
      position: unset;
      font-size: 1.5rem;
      flex-direction: column;
      align-items: center;
      margin-top: 25%;
    }
  }
}

.blog-content {
  padding: 2rem 0;
}

.hero-content {
  font-size: 16px;

  .created-time {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;
  }
  .blog-title {
    margin-top: 0.7rem;
    font-size: 1.5em;

    @include mq(xs) {
      font-size: 1.7em;
    }
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2em;

    @include mq(md) {
      font-size: 2.5em;
    }
  }
  .read-time {
    display: flex;
    justify-content: flex-end;
    font-weight: 300;
    font-size: 14px;
    margin-top: 0.5rem;
    gap: 0.5rem;
    align-items: center;
    line-height: 143.1%;
  }
  .category-tag {
    background-color: map-get($map: $colors, $key: light-300);
    font-size: 0.85rem;
    width: fit-content;
    @include color($text, dark-300);
    padding: 0.1em 0.5em;
    border-radius: 5px;
  }
  .hero-pic-wrapper {
    margin-top: 1rem;
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
      font-size: 2.4em;
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
