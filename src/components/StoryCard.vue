<template>
    <v-flex class="story" pa-2 xs12 sm4>
      <v-card class="story-card panel-content--show-1">
        <v-img
          class="story-card__image"
          :src="story.imageUrl"
          aspect-ratio="1"
        >
        </v-img>
        <v-card-actions class="story-card__content">{{ story.content }}</v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
export default {
    props: {
        story: Object
    }
}
</script>

<style>
.story-card__content {
  background-color: #ffd463;
  min-height: 100px;
}
</style>


