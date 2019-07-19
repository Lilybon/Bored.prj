<template>
    <div class="playground">
        <TestCard 
            :count="currentTestCount" 
            :activity="currentActivity"
            data-step="1"
            data-intro="活動卡片 價格跟難易度為抽象單位(0-1)"
        />
        <TestChoiceButton 
            :choice="false" 
            @makeDecision="makeDecision"
            :step="2"
            :intro="`用滑鼠拖曳活動卡片至此或直接按按鈕選擇表示討厭活動`" 
        />
        <TestChoiceButton 
            :choice="true" 
            @makeDecision="makeDecision"
            :step="3"
            :intro="`用剛剛說明過的方法選擇表示喜歡活動`" 
        />
        <TestInfoBoard 
            :likeCount="likeCount" 
            :dislikeCount="dislikeCount" 
            :currentTestCount="currentTestCount"
            :totalTestCount="totalTestCount"
            data-step="4"
            data-intro="記分板提供你測驗的進度" 
        />
    </div>
    
</template>

<script>
import TestCard from '../components/TestCard'
import TestChoiceButton from '../components/TestChoiceButton'
import TestInfoBoard from '../components/TestInfoBoard'
import { mapState, mapMutations, mapActions } from 'vuex'
import "intro.js/minified/introjs.min.css"
import "intro.js/themes/introjs-modern.css"
import * as introJs from "intro.js"

export default {
    components: {
        TestCard,
        TestChoiceButton,
        TestInfoBoard
    },
    data() {
        return {
            dialog: true,
            currentTestCount: 1,
            likeCount: 0,
            dislikeCount: 0
        }
    },
    computed: {
        ...mapState({
            totalTestCount: 'miniTestNum',
            currentActivity: 'currentMiniTestActivity',
            isFirstTime: 'isFirstTimeDoMiniTest'
        })
    },
    created() {
        this.resetMiniTestActivitiesCollection()
        this.requestRandomActivity()
    },
    mounted() {
        if(this.isFirstTime) {
            introJs(".playground")
                .setOption("overlayOpacity", 0.35)
                .start()
            this.notFirstTimeDoMiniTest()
        }
    },
    methods: {
        generateNextQuestion(){
            if(this.currentTestCount >= this.totalTestCount){
                this.$router.push('stats-result')
            }else{
                this.currentTestCount++
                this.requestRandomActivity()
            }
        },
        makeDecision(likeFlag) {
            likeFlag ? this.likeCount++ : this.dislikeCount++
            this.pushMiniTestActivitiesCollection({
                activity: {
                    ...this.currentActivity, 
                    likeFlag
                }
            })
            this.generateNextQuestion()
        },
        ...mapMutations({
            pushMiniTestActivitiesCollection :'PUSH_MINI_TEST_ACTIVITIES_COLLECTION',
            resetMiniTestActivitiesCollection:'RESET_MINI_TEST_ACTIVITIES_COLLECTION',
            notFirstTimeDoMiniTest: 'NOT_FIRST_TIME_DO_MINI_TEST'
        }),
        ...mapActions({
            requestRandomActivity: 'requestRandomActivity'
        })
    }
}
</script>

<style>
.playground {
    position: relative;
    height: 100%;
}
.introjs-tooltiptext {
    margin: 18px 15px 10px;
    line-height: 1.5rem;
}
</style>


