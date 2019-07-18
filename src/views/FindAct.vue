<template>
    <v-container>
        <v-form>
            <v-layout class="panel" row wrap justify-space-around pa-2>
                <v-flex pa-2 xs12 class="panel-content">
                    <h1>尋找活動</h1>
                    <p class="panel-content__description panel-content--slide-from-right">
                        你真的無聊到爆了對吧？<br/>
                        bored.prj正是為了像你這樣的客戶而生，<br/>
                        透過篩選自訂義的條件來找到適合自己的活動清單吧，<br/>
                        也許你根本懶得設定也可以考慮直接點選下方的按鈕繳交表單。
                    </p>
                    <p class="panel-content__description panel-content--slide-from-right">
                        選項定義<br/>
                        <b>活動類別</b> - 活動的性質<br/>
                        <b>價格</b> - 活動需要的金費資出(非幣別單位，0為最便宜-1為最貴)<br/>
                        <b>參與人數</b> - 活動涉及的必要人數(1-5人)<br/>
                        <b>達成難易度</b> - 活動完成的難易度(0為最簡單-1為最困難)
                    </p>
                </v-flex>
                <v-flex px-4 xs12 sm6 class="panel-content--show-1">
                    <v-icon small>bookmarks</v-icon>活動類別
                    <v-select
                        v-model="type"
                        :items="categories"
                        :color="color"
                    ></v-select>
                </v-flex>
                <v-flex px-4 xs12 sm6 class="panel-content--show-2">
                    <v-icon small>monetization_on</v-icon>價格
                    <v-range-slider
                        v-model="price"
                        :max="1"
                        :min="0"
                        :step="0.1"
                        :thumb-size="thumbSize"
                        thumb-label="always"
                        :color="color"
                    ></v-range-slider>
                </v-flex>
                <v-flex px-4 xs12 sm6 class="panel-content--show-3">
                    <v-icon small>group</v-icon>參與人數
                    <v-slider
                        v-model="participants"
                        min="1"
                        max="5"
                        step="1"
                        :thumb-size="thumbSize"
                        thumb-label="always"
                        :color="color"
                    ></v-slider>
                </v-flex>
                <v-flex px-4 xs12 sm6 class="panel-content--show-4">
                    <v-icon small>create</v-icon>達成難易度
                    <v-range-slider
                        v-model="accessibility"
                        min="0"
                        max="1.0"
                        step="0.1"
                        :thumb-size="thumbSize"
                        thumb-label="always"
                        :color="color"
                    ></v-range-slider>
                </v-flex>
                <v-flex px-4 xs12 sm6 class="panel-content--show-2">
                    <v-btn class="white--text" block large :color="color" @click="submit">救救我吧！</v-btn>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            color: "orange darken-3",
            thumbSize: "20",
            price: [0, 1],
            type: '',
            participants: 1,
            accessibility: [0, 1],
        }
    },
    created() {
        this.resetActList();
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        }
    },
    methods: {
        submit() {
            const condition = {
                type: this.type,
                minprice: this.price[0],
                maxprice: this.price[1],
                participants: this.participants,
                minaccessibility: this.accessibility[0],
                maxaccessibility: this.accessibility[1]
            }
            // console.log('request args', condition)
            this.$store.dispatch('requestFindActActivitiesCollection', condition)
            this.$router.push('act-list')
        },
        ...mapMutations({
            resetActList: 'RESET_FIND_ACT_ACTIVITIES_COLLECTION'
        })
    }
}
</script>

<style>

</style>