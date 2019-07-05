<template>
<div class="panel">
  <v-layout  row wrap justify-space-around>
    <Entrance/>
  </v-layout>
  <v-layout row wrap justify-space-around px-5>
    <StoryCard 
      v-for="story in stories" 
      :key="story.content"
      :story="story"
      />
      <v-spacer></v-spacer>
  </v-layout>
</div>
  
</template>

<script>
import Entrance from '../components/Entrance'
import StoryCard from '../components/StoryCard'

export default {
    data() {
      return {
        stories: [
          {
            imageUrl: require('../assets/image/story/stat.png'),
            title: '興趣測驗',
            content: '您可以透過「興趣測驗」輕鬆地來個小測驗來選擇喜好的活動，透過生成的圖表重新認識自己。'
          },
          {
            imageUrl: require('../assets/image/story/list.jpg'),
            title: '尋找活動',
            content: '也可以透過「尋找活動」自訂義偏好來尋找適合自己的建議活動清單，也可以跳過選項直接開始。'
          },
          {
            imageUrl: require('../assets/image/story/feedback.jpg'),
            title: '問題回報',
            content: '歡迎找親朋好友一起來做測試，有空時也不妨給我一點feedback，再次感謝您的使用。'
          }
        ]
      }
    },
    components: {
      Entrance,
      StoryCard
    },
}
</script>

<style>

</style>

