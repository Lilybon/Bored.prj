<template>
    <v-layout class="panel" row wrap justify-space-around pa-2>
            <v-flex pa-2 xs12 class="panel-content">
                <h1>統計結果</h1>
                <p class="panel-content__description panel-content--slide-from-right">
                    辛苦了！<br/>
                    我為您準備好了以下的分析圖表，<br/>
                    希望您可以從剛剛的測驗和現在呈現的分析中得到生活靈感，<br/>
                    不要再無聊到來玩這個小遊戲了。
                </p>
            </v-flex>
            <v-flex px-4 xs12 sm6 md4>
                <v-btn block large :color="color" to="mini-test">再玩一次</v-btn>
            </v-flex>
            <v-flex px-4 xs12 sm6 md4>
                <v-btn block large :color="color" to="/">回到主頁</v-btn>
            </v-flex>
        </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            color: "orange darken-3",
        }
    },
    computed: {
        ...mapState({
            actList: 'miniTestActivitiesCollection'
        })
    }
}
</script>

<style>

</style>