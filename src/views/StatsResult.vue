<template>
  <v-container>
    <v-layout class="panel" row wrap justify-space-around pa-2>
      <v-flex pa-2 xs12 class="panel-content">
        <h1>統計結果</h1>
        <p class="panel-content__description panel-content--slide-from-right">
          辛苦了！
          <br />我為您準備好了以下的分析圖表，
          <br />希望您可以從剛剛的測驗和現在呈現的分析中得到生活靈感，
          <br />不要再無聊到來玩這個小遊戲了。
        </p>
      </v-flex>
      <v-flex pa-2 xs12 class="panel-content">
        <h1>你的分類是... {{ likeRateRank.title }}！</h1>
        <p
          class="panel-content__description panel-content--slide-from-right"
        >{{ likeRateRank.comment }}</p>
      </v-flex>
      <StatsChart :data="countGroupByCategory" chartType="stats-chart--group-bar-chart" />
      <StatsChart :data="actList" chartType="stats-chart--scatter-plot" />
      <v-flex px-4 xs12 sm6 md4>
        <v-btn block large :color="color" to="mini-test">再玩一次</v-btn>
      </v-flex>
      <v-flex px-4 xs12 sm6 md4>
        <v-btn block large :color="color" to="/">回到主頁</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import StatsChart from "../components/StatsChart";

export default {
  components: {
    StatsChart
  },
  data() {
    return {
      color: "orange darken-3",
      // actList: [
      //     {
      //         accessibility:0.1,
      //         activity:"Do something nice for someone you care about",
      //         key:"8321894",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.4,
      //         activity:"Go on a fishing trip with some friends",
      //         key:"3149232",
      //         likeFlag:false,
      //         link:"",
      //         participants:3,
      //         price:0.4,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.1,
      //         activity:"Write a short story",
      //         key:"6301585",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.1,
      //         activity:"Go to the gym",
      //         key:"4387026",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0.2,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.3,
      //         activity:"Bake something you've never tried before",
      //         key:"5665663",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0.4,
      //         type:"cooking"
      //     },
      //     {
      //         accessibility:0.1,
      //         activity:"Take a hike at a local park",
      //         key:"8724324",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.08,
      //         activity:"Make a couch fort",
      //         key:"2352669",
      //         likeFlag:false,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.1,
      //         activity:"Clean out your closet and donate the clothes you've outgrown",
      //         key:"9026787",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"charity"

      //     },
      //     {
      //         accessibility:0,
      //         activity:"Surprise your significant other with something considerate",
      //         key:"6204657",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.9,
      //         activity:"Do yoga",
      //         key:"4688012",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.3,
      //         activity:"Play a game of Monopoly",
      //         key:"1408058",
      //         likeFlag:false,
      //         link:"",
      //         participants:4,
      //         price:0.2,
      //         type:"social"
      //     },
      //     {
      //         accessibility:0.7,
      //         activity:"Visit a nearby museum",
      //         key:"5490351",
      //         likeFlag:false,
      //         link:"",
      //         participants:1,
      //         price:0.2,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.8,
      //         activity:"Start a band",
      //         key:"5675880",
      //         likeFlag:true,
      //         link:"",
      //         participants:4,
      //         price:0.3,
      //         type:"music"
      //     },
      //     {
      //         accessibility:0.15,
      //         activity:"Create a compost pile",
      //         key:"8631548",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"diy"
      //     },
      //     {
      //         accessibility:0.1,
      //         activity:"Conquer one of your fears",
      //         key:"8344539",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0.1,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.05,
      //         activity:"Pick up litter around your favorite park",
      //         key:"4894697",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"charity"
      //     },
      //     {
      //         accessibility:0.3,
      //         activity:"Bake something you've never tried before",
      //         key:"5665663",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0.4,
      //         type:"cooking"
      //     },
      //     {
      //         accessibility:0.25,
      //         activity:"Learn how to iceskate or rollerskate",
      //         key:"5947957",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0.1,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.3,
      //         activity:"Pot some plants and put them around your house",
      //         key:"6613330",
      //         likeFlag:false,
      //         link:"",
      //         participants:1,
      //         price:0.4,
      //         type:"relaxation"
      //     },
      //     {
      //         accessibility:0.08,
      //         activity:"Clean out your car",
      //         key:"2896176",
      //         likeFlag:false,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"recreational"
      //     },
      //     {
      //         accessibility:0.6,
      //         activity:"Learn to play a new instrument",
      //         key:"3192099",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0.55,
      //         type:"music"
      //     },
      //     {
      //         accessibility:0.1,
      //         activity:"Go swimming with a friend",
      //         key:"1505028",
      //         likeFlag:true,
      //         link:"",
      //         participants:2,
      //         price:0.1,
      //         type:"social"
      //     },
      //     {
      //         accessibility:0.9,
      //         activity:"Research a topic you're interested in",
      //         key:"3561421",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"education"
      //     },
      //     {
      //         accessibility:0.1,
      //         activity:"Go stargazing",
      //         key:"8832605",
      //         likeFlag:true,
      //         link:"",
      //         participants:1,
      //         price:0,
      //         type:"relaxation"
      //     },
      //     {
      //         accessibility:0.3,
      //         activity:"Go see a Broadway production",
      //         key:"4448913",
      //         likeFlag:false,
      //         link:"",
      //         participants:4,
      //         price:0.8,
      //         type:"recreational"
      //     }
      // ],
      likeRateRankList: [
        {
          minRate: 0.9,
          title: "不挑的",
          comment: `如果測驗沒壞的話，你一定是在跟我唬爛對吧？請試著深入自己的內心真誠談話。
                    自己到底是太過缺乏主見，還是好奇心過人，抑或是對克服困難有異常執著只有自己最清楚，否則以常人的角度來看你是不可能存在的特異人士。
                    如果無法搞懂自己為何如此選擇建議去找心理醫生諮詢，清楚明瞭的認識自己那麼恭喜你，至少你可以隨時找個活動來讓自己過得很快樂。`
        },
        {
          minRate: 0.65,
          title: "有熱情的",
          comment: `你對不同的生活有期待跟想像，且對各種事物保持一定程度的關注和興趣，正向的能量是健康表現。
                    有機會也不妨多去印證少數自己沒興趣的事情是否真的有這麼無聊乏味，既然大部分的活動都能接受，請不要當思想上的巨人趕快找個可以解悶的活動開始從事吧。`
        },
        {
          minRate: 0.35,
          title: "有原則的",
          comment:
            "你對活動的好惡有自己獨到的堅持，是個很鮮明的人，但有時候光是聽到不擅長的事情或是考慮到學習成本和難度就會望之卻步，請克服內心的恐懼勇敢的體驗未知的經驗吧。"
        },
        {
          minRate: 0.1,
          title: "專一的",
          comment: `你無法在這個測驗中大部分的活動中得到樂趣，可能是你的興趣太過專一或是你喜歡的是類別過於特殊，可以堅持自己的興趣也是件不錯的事情，希望你身邊有同好可以保持對興趣的熱情。
                    仍然建議可多和不同興趣的人交流切磋或合作完成某些特別的事，會有不一樣的想法。`
        },
        {
          minRate: 0,
          title: "厭世的",
          comment: `太誇張了，我沒辦法想像能有什麼東西足以觸動你的內心，你喜歡的事情實在是少到極端，或者你只是連老實地回答測驗都有困難。
                    請以不傷害他人及觸法的前提下設立一些容易達成的短期目標，不用在意目標有多無謂只管規劃和實踐即可，也許你是太過能幹而容易對事情容易厭煩，或是常常在還沒實際開始從事一件活動前就因為設想過多而卻步。
                    別再胡思亂想，請跟家人朋友甚至陌生人說說自己的感覺或是迷惘，適度地向他人抱怨訴苦也是個適合你的活動。`
        }
      ]
    };
  },
  computed: {
    likeRate() {
      const likeCount = this.actList.reduce(
        (acc, val) => (acc += val.likeFlag ? 1 : 0),
        0
      );
      const totalCount = this.actList.length;
      return likeCount / totalCount;
    },
    likeRateRank() {
      return this.likeRateRankList.filter(
        val => this.likeRate >= val.minRate
      )[0];
    },
    countGroupByCategory() {
      let countGroup = {};
      this.actList.forEach(val => {
        let type = val.type;
        let likeFlag = val.likeFlag;
        if (!countGroup[type]) {
          countGroup[type] = {
            likeCount: 0,
            dislikeCount: 0,
            totalCount: 0
          };
        }
        countGroup[type].totalCount++;
        if (likeFlag) countGroup[type].likeCount++;
        else countGroup[type].dislikeCount++;
      });
      let countArr = [];
      for (let key in countGroup) {
        let obj = countGroup[key];
        obj.likeRate = obj.likeCount / obj.totalCount;
        countArr.push({
          ...obj,
          type: key
        });
      }
      // 轉換成array方便d3操作
      return countArr;
    },
    ...mapState({
      actList: "miniTestActivitiesCollection"
    })
  }
};
</script>

<style>
</style>