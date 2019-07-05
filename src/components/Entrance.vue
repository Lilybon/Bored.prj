<template>
    <v-flex xs12 class="entrance">
      <div class="entrance__background"></div>
      <v-layout class="entrance__container" column align-center justify-center>
        <v-flex class="entrance-content entrance-content--slide-from-bottom-and-show">
          <h1 class="entrance-title">Bored.prj</h1>
        </v-flex>
        <v-flex class="entrance-content entrance-content--show">
          <v-layout row wrap>
            <v-flex xs12 sm6 px-2>
              <v-btn class="entrance-content__button" color="warning" to="mini-test" block large>興趣測驗</v-btn>
            </v-flex>
            <v-flex xs12 sm6 px-2>
              <v-btn class="entrance-content__button" color="warning" to="find-act" block large>尋找活動</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
</template>

<script>
export default {
    
}
</script>

<style>
.entrance-content--slide-from-bottom-and-show {
  animation: .5s ease-out 0s 1 slideFromBottomAndShow;
}
.entrance-content--show {
  animation: 1s ease-out 0s 1 showContent;
}
.entrance {
  position: relative;
  background: url(https://i.4pcdn.org/s4s/1525660272216.png) no-repeat center;
  background-size: cover; 
}
.entrance__container {
  position: relative;
  height: 100vh;
}
@media (min-width: 500px){
  .entrance__container {
    height: 60vh;
  }
}
.entrance__background {
  background: rgba(25,41,103,0.82);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.entrance-title {
  font-family: 'Prosto One', cursive;
  padding: 30px 0;
  font-size: 30px;
}
@media (min-width: 300px) {
  .entrance-title {
    font-size: 50px;
  }
}
@media (min-width: 600px) {
  .entrance-title {
    font-size: 100px;
  }
}
@media (min-width: 800px) {
  .entrance-title {
    font-size: 150px;
  }
}
.entrance-content {
  flex: 0 1 auto;
}
</style>


