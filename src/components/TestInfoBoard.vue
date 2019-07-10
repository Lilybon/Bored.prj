<template>
    <div class="test-info-board">
        <v-layout class="test-info-board__container" row wrap justify-center align-center>
            <v-flex class="test-info-board__progress" xs12 md4>
                <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="10"
                    :value="(currentTestCount - 1)/totalTestCount*100"
                    color="#A1D8E4"
                >
                    {{ currentTestCount - 1 }} / {{ totalTestCount }}
                </v-progress-circular>
                </v-flex>
            <v-flex class="test-info-board__choice test-info-board__choice--dislike" xs6 md4>
                <v-icon color="#D81503">thumb_down_alt</v-icon>{{ dislikeCount }}
            </v-flex>
            <v-flex class="test-info-board__choice test-info-board__choice--like" xs6 md4>
                <v-icon color="#0AB97F">thumb_up_alt</v-icon>{{ likeCount }}
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    props: {
        likeCount: Number,
        dislikeCount: Number,
        currentTestCount: Number,
        totalTestCount: Number
    }
}
</script>

<style>
.test-info-board {
    position: relative;
    z-index: 5;
    top: 50vh;
    left: 50%;
    margin-left: -80px;
    width: 160px;
    height: 160px;
    padding: 20px;
    border-radius: 20px;
    background-color: #333031;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: white;
}
@media (min-width: 600px) {
   .test-info-board {
        margin-left: -100px;
        width: 200px;
        height: 200px;
   } 
}
@media (min-width: 960px) {
   .test-info-board {
        top: 60vh;   
        margin-left: -200px;
        width: 400px;
        height: 150px;
   } 
}
.test-info-board__container {
    height: 100%;
}
.test-info-board__progress {
    font-size: 15px;
}
@media (min-width: 960px) {
   .test-info-board__progress {
        order: 2;
   } 
}
.test-info-board__choice {
        font-size: 15px;
}
@media (min-width: 600px) {
    .test-info-board__choice {
        font-size: 25px;
    }
    .test-info-board__choice i {
        font-size: 25px;
    }
}
.test-info-board__choice--like {
    color: #0AB97F;
}
@media (min-width: 960px) {
   .test-info-board__choice--like {
        order: 3;
   } 
}
.test-info-board__choice--dislike {
    color: #D81503;
}
@media (min-width: 960px) {
   .test-info-board__choice--dislike {
        order: 1;
   } 
}
</style>


