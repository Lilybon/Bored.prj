<template>
    <v-dialog
            class="test-dialog"
            v-model="isFirstTime"
            width="500"
        >
        <v-card dark>
            <v-card-text class="test-dialog__content">
                <p class="test-dialog__content--important font-weight-medium">測驗說明</p>
                <p class="font-weight-light">依照直覺將活動卡片作喜歡討厭的歸類。注意活動的難易和開銷僅是心理的相對數值。</p>
                <br/>
                <p class="test-dialog__content--important font-weight-medium">介面說明</p>
                <p class="font-weight-light">選擇按鈕 - 拖曳卡片至<a class="green white--text">喜歡</a>或<a class="red white--text">討厭</a>的圈圈或直接點擊都能做出選擇。</p>
                <p class="font-weight-light">進度條 - 畫面中央有進度條供您操考做題進度。</p>
                
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="#A1D8E4"
                flat
                @click="notFirstTimeDoMiniTest"
            >
                了解
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data(){
        return {
            color: "orange darken-3",
        }
    },
    methods: {
        ...mapMutations({
            notFirstTimeDoMiniTest: 'NOT_FIRST_TIME_DO_MINI_TEST'
        })
    },
    computed: {
        ...mapState({
            isFirstTime: 'isFirstTimeDoMiniTest'
        })
    }
}
</script>

<style>
.test-dialog__content--important {
    font-size: 20px;
    color: #A1D8E4;
}
</style>



