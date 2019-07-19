<template>
    <v-container class="find-act__container">
        <v-form>
            <v-layout class="panel find-act__form" row wrap justify-space-around pa-4>
                <v-flex pa-2 xs12 class="panel-content">
                    <v-img
                        class="find-act__icon panel-content--show-4" 
                        src="https://cdn0.iconfinder.com/data/icons/business-381/500/business-work_13-512.png" 
                        max-width="300"
                        alt="target"
                    ></v-img>
                    <h1 class="text-xs-center find-act__title">Find Activity</h1>
                    <p class="panel-content__description panel-content--slide-from-right white--text">
                        選擇你不討厭的活動吧，呃...懶得設定也可直接點下方按鈕繳交表單。
                    </p>
                </v-flex>
                <v-flex px-4 pb-1 xs12 class="panel-content--show-1 white--text">
                    <v-icon color="#a5a5bd" small left>bookmarks</v-icon>活動類別
                    <v-select
                        dark
                        v-model="type"
                        :items="categories"
                        :color="color"
                    ></v-select>
                </v-flex>
                <v-flex px-4 pb-1 xs12 class="panel-content--show-2 white--text">
                    <v-icon color="#a5a5bd" small left>monetization_on</v-icon>價格(非幣別單位)
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
                <v-flex px-4 pb-1 xs12 class="panel-content--show-3 white--text">
                    <v-icon color="#a5a5bd" small left>group</v-icon>參與人數
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
                <v-flex px-4 pb-1 xs12 class="panel-content--show-4 white--text">
                    <v-icon color="#a5a5bd" small left>create</v-icon>達成難易度
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
                    <v-btn class="white--text" block large color="#fb8c00" @click="submit">救救我吧！</v-btn>
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
            color: "#f9c370",
            thumbSize: "18",
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

<style lang="scss">
.find-act {
    &__container {
        max-width: 600px;
        margin: 0 auto;
    }
    &__form {
        position: relative;
        background-color: #5c6579;
        border-bottom: 12px solid #4f5d7b;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 0px;
            height: 0px;
            border-top: 45px solid #35326b;
            border-left: 45px solid transparent;
            z-index: 1;
        }
    }
    &__title {
        color: #f9c370;
        font-family: 'Prosto One', cursive;
        font-size: 35px;
        @media (min-width: 500px) {
            font-size: 45px;
        }
    }
    &__icon {
        width: 100px;
        margin: 0 auto;
        filter: grayscale(.35);
    }
}
</style>