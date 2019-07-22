<template>
  <div class="panel">
    <v-layout row wrap justify-space-around>
      <Entrance />
    </v-layout>
    <v-layout class="story-container" row wrap justify-space-around px-5>
      <StoryCard v-for="story in stories" :key="story.content" :story="story" />
      <v-spacer></v-spacer>
    </v-layout>
    <About />
  </div>
</template>

<script>
import Entrance from "../components/Entrance";
import StoryCard from "../components/StoryCard";
import About from "../components/About";

export default {
  data() {
    return {
      stories: [
        {
          imageUrl:
            "https://cdn1.iconfinder.com/data/icons/finance-items/512/mobile_analytics_financial_report_diagram_analysis_smart_phone_market_data_smartphone_chart_graph_flat_design_icon-512.png",
          title: "興趣測驗",
          content:
            "您可以透過「興趣測驗」輕鬆地來個小測驗來選擇喜好的活動，不要懷疑，它就是故意做得像是劣化版的beetalk，隨意地將喜歡跟討厭的活動做分類吧，您可透過分析圖表重新認識自己的興趣。"
        },
        {
          imageUrl:
            "https://cdn0.iconfinder.com/data/icons/web-development-and-seo-part-2/513/83-512.png",
          title: "尋找活動",
          content:
            "也可以透過「尋找活動」自訂義偏好來尋找適合自己的建議活動清單，也可以跳過選項直接開始，該服務會幫您尋找符合您口味的活動列表，可依照消費、人數、類型、難易度做基本的排序。"
        },
        {
          imageUrl:
            "https://cdn2.iconfinder.com/data/icons/seo-and-marketing-colored-3/128/69-256.png",
          title: "問題回報",
          content:
            "歡迎找親朋好友一起來做測試，遇到問題麻煩直接發信砲轟我，有好點子也歡迎跟我洽談，有空時也不妨給我一點feedback，再次感謝您的使用。"
        }
      ]
    };
  },
  components: {
    Entrance,
    StoryCard,
    About
  }
};
</script>

<style>
.story-container {
  padding: 50px 200px;
  background-color: #221f33;
}
</style>

