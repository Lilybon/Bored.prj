<template>
  <v-container>
    <v-layout class="panel" row wrap pa-2>
      <v-flex pa-2 xs12>
        <h1>建議活動</h1>
        <p v-if="listFound" class="panel-content__description panel-content--slide-from-right">
          哈囉，我為無聊的你訂做了一系列值得浪費時間的清單，
          <br />如果喜歡的話請推薦給親朋好友試試，
          <br />活動都不中意的話可以點選再玩一次重新搜尋。
        </p>
      </v-flex>
      <v-flex v-if="listFound" px-4 xs12 sm6 class="panel-content--show-1">
        <v-icon small>bookmarks</v-icon>請依照欄位排序
        <v-select
          v-model="sortBy"
          :items="sortByOptions"
          label="請選擇"
          :color="color"
          @change="sortList"
        ></v-select>
      </v-flex>
      <v-flex v-if="listFound" px-4 xs12 sm6 class="panel-content--show-2">
        <v-icon small>monetization_on</v-icon>排序原則
        <v-select
          v-model="powerBy"
          :items="powerByOptions"
          label="請選擇"
          :color="color"
          @change="sortList"
        ></v-select>
      </v-flex>
      <v-flex v-if="progress" class="panel__progress" pa-2 xs12 text-xs-center>
        <v-progress-circular indeterminate color="#7c79a2" :size="70" :width="7"></v-progress-circular>
      </v-flex>
      <v-flex class="not-found" v-if="listNotFound" pa-2 xs12>
        <p
          class="panel-content__description panel-content--slide-from-right"
        >呃 看來我們的bored.api出了點小毛病...</p>
        <div class="not-found__container">
          <img
            class="not-found__image"
            alt="抱歉，無法找到符合您要求的活動。"
            src="https://static.newmobilelife.com/wp-content/uploads/2018/04/buddha-maker_00.jpg"
          />
          <p class="not-found__title">not found</p>
          <p class="not-found__content">
            抱歉
            <br />無法找到符合您要求的活動
          </p>
        </div>
      </v-flex>
      <ActCard v-for="activity in actList" :key="activity.key" :activity="activity" />
      <v-flex px-4 xs12 sm6 md4>
        <v-btn class="white--text" block large :color="color" to="find-act">再玩一次</v-btn>
      </v-flex>
      <v-flex px-4 xs12 sm6 md4>
        <v-btn class="white--text" block large :color="color" to="/">回到主頁</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ActCard from "../components/ActCard";
import { mapState } from "vuex";

export default {
  components: {
    ActCard
  },
  data() {
    return {
      color: "orange darken-3",
      progress: true,
      sortBy: null,
      sortByOptions: [
        {
          text: "活動類別",
          value: "type"
        },
        {
          text: "價格",
          value: "price"
        },
        {
          text: "參與人數",
          value: "participants"
        },
        {
          text: "達成難易度",
          value: "accessibility"
        }
      ],
      powerBy: null,
      powerByOptions: [
        {
          text: "由小到大",
          value: "up"
        },
        {
          text: "由大到小",
          value: "down"
        }
      ]
    };
  },
  methods: {
    sortList() {
      if (this.sortBy && this.powerBy) {
        this.$store.commit("SORT_FIND_ACT_ACTIVITIES_COLLECTION", {
          sortBy: this.sortBy,
          powerBy: this.powerBy
        });
      }
    }
  },
  computed: {
    listFound() {
      return this.actList.length && !this.progress;
    },
    listNotFound() {
      return !this.actList.length && !this.progress;
    },
    ...mapState({
      actList: "findActActivitiesCollection"
    })
  },
  watch: {
    actList() {
      // vuex有成功改變state就解除progress狀態
      this.progress = false;
    }
  }
};
</script>

<style lang="scss">
.not-found {
  &__container {
    position: relative;
    margin: 0 auto;
    width: 260px;
    height: 194px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 0 0.5em #cc9861;
    @media (min-width: 600px) {
      width: 400px;
      height: 299px;
    }
    @media (min-width: 800px) {
      width: 600px;
      height: 448px;
    }
  }
  &__image {
    width: 100%;
    opacity: 0.4;
  }
  &__title {
    position: absolute;
    left: 15%;
    bottom: 30%;
    padding: 0 0 10px 10px;
    text-transform: uppercase;
    font: {
      weight: bold;
      size: 30px;
    }
    color: #a08b6a;
    @media (min-width: 600px) {
      left: 5%;
      font-size: 50px;
    }
    @media (min-width: 800px) {
      left: 15%;
      font-size: 60px;
    }
  }
  &__content {
    position: absolute;
    right: 15%;
    bottom: 10%;
    padding-left: 10px;
    border-left: 8px solid #a08b6a;
    font: {
      weight: bold;
      size: 16px;
    }
    color: #5d543a;
    @media (min-width: 600px) {
      font-size: 24px;
    }
    @media (min-width: 800px) {
      font-size: 32px;
    }
  }
}
</style>