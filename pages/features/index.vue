<template>
  <main class="features-container">
    <grid-component v-for="(feature, index) in features" :key="index">
      <TextContainer
        :class="[feature.layoutLeft ? 'grid-area-one' : 'grid-area-two']"
        :title="feature.text.title"
        :description="feature.text.description"
        :sub-description="feature.text.subDescription"
      />

      <ImageContainer
        :class="[feature.layoutLeft ? 'grid-area-two' : 'grid-area-one']"
        :url="feature.imageUrl"
      />
    </grid-component>
  </main>
</template>

<script>
import GridComponent from '../../components/features/GridComponent.vue'
import ImageContainer from '../../components/features/ImageContainer.vue'
import TextContainer from '../../components/features/TextContainer.vue'
export default {
  name: 'FeaturesPage',
  components: { GridComponent, ImageContainer, TextContainer },
  data() {
    return {
      features: [
        {
          layoutLeft: true,
          text: {
            title: 'Mobile App For Waiter Ordering',
            description:
              ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            subDescription:
              "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
          },
          imageUrl:
            'https://res.cloudinary.com/dudbkhnf3/image/upload/v1633346809/nepvent-company-site/img-2.png',
        },
        {
          layoutLeft: false,
          text: {
            title: 'Customizable Reports',
            description:
              'Customizable Reports: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            subDescription:
              "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
          },
          imageUrl:
            'https://res.cloudinary.com/dudbkhnf3/image/upload/v1633346809/nepvent-company-site/img-1.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.grid-area-one {
  grid-area: one;
}
.grid-area-two {
  grid-area: two;
}
.features-container {
  @include container();

  padding: 3rem 0;

  display: flex;
  gap: 3rem;
  flex-direction: column;
}
</style>
