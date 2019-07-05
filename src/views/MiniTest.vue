<template>
    <div class="playground">
        <TestDialog/>
        <TestCard 
            :count="currentTestCount" 
            :activity="currentActivity"
        />
        <TestChoiceButton 
            :choice="true" 
            @makeDecision="makeDecision"
        />
        <TestChoiceButton 
            :choice="false" 
            @makeDecision="makeDecision"
        />
        <TestInfoBoard 
            :likeCount="likeCount" 
            :dislikeCount="dislikeCount" 
            :currentTestCount="currentTestCount"
            :totalTestCount="totalTestCount" 
        />
    </div>
    
</template>

<script>
import TestDialog from '../components/TestDialog'
import TestCard from '../components/TestCard'
import TestChoiceButton from '../components/TestChoiceButton'
import TestInfoBoard from '../components/TestInfoBoard'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    components: {
        TestDialog,
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
            currentActivity: 'currentMiniTestActivity'
        })
    },
    created() {
        this.resetMiniTestActivitiesCollection()
        this.requestRandomActivity()
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
            resetMiniTestActivitiesCollection:'RESET_MINI_TEST_ACTIVITIES_COLLECTION'
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
}
</style>


