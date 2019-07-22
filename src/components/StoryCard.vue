<template>
  <v-flex class="story" py-2 px-4 xs12 sm6 md4>
    <div class="story-card panel-content--show-3">
      <v-img class="story-card__image" :src="story.imageUrl" aspect-ratio="1" max-width="270px"></v-img>
      <p class="story-card__title white--text display-1 text-xs-center">{{ story.title }}</p>
      <v-card-actions class="story-card__content white--text">{{ story.content }}</v-card-actions>
    </div>
  </v-flex>
</template>

<script>
export default {
  props: {
    story: Object
  }
};
</script>

<style lang="scss">
.story-card {
  &__title {
    font-weight: 300;
  }
  &__image {
    margin: 0 auto 20px;
    filter: grayscale(0.8);
    transition: filter 0.3s ease-in, transform 0s ease-in;
    &:hover {
      filter: grayscale(0);
      transform: rotate(360deg);
      transition: transform 0.6s ease-in;
    }
  }
  &__content {
    margin: 0 auto;
    border-top: 2px solid #fb8c00;
    min-height: 100px;
    line-height: 2rem;
  }
}
</style>


