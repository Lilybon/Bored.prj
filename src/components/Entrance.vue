<template>
    <v-flex xs12 class="entrance">
      <div class="entrance__background"></div>
      <v-layout class="entrance__container" column align-center justify-center>
        <v-flex class="entrance-content entrance-content--slide-from-bottom-and-show">
          <h1 class="entrance-title">Bored.prj
            <span class="entrance-title--flagpole">
              <span class="entrance-title--flag">LUL</span>
            </span>
          </h1>
          <p class="entrance-subtitle entrance-subtitle--typewriter">提供簡易測驗和篩選活動的無聊的小玩具。</p>
        </v-flex>
        <v-flex class="entrance-content entrance-content--show">
          <v-layout row wrap class="entrance-content__button-group">
            <v-flex xs12 sm6 px-2>
              <v-btn class="entrance-content__button" color="warning" to="mini-test" block large>興趣測驗</v-btn>
            </v-flex>
            <v-flex xs12 sm6 px-2>
              <v-btn class="entrance-content__button" color="warning" to="find-act" block large>尋找活動</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex class="entrance-content entrance-content__slide-down white--text" @click="scrollDown">
          <v-icon color="white" x-large>keyboard_arrow_down</v-icon>
        </v-flex>
      </v-layout>
    </v-flex>
</template>

<script>
export default {
    methods: {
      scrollDown() {
        
      }
    }
}
</script>

<style lang="scss">
.entrance-content--slide-from-bottom-and-show {
  animation: .5s ease-out 0s 1 slideFromBottomAndShow;
}
.entrance-content--show {
  animation: 1s ease-out 0s 1 showContent;
}
.entrance {
  position: relative;
  background: url(https://images.theconversation.com/files/108832/original/image-20160121-9760-e1bi33.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip) no-repeat center;
  background-size: cover;
  &__container {
    position: relative;
    height: 100vh;
  }
  &__background {
    background: rgba(20,26,51,0.82);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  &-title {
    font-family: 'Prosto One', cursive;
    font-size: 20px;
    font-weight: 300;
    color: #cfd0d8;
    text-align: center;
    &--flag {
      display: none;
    }
    &--flagpole {
      display: none;
    }
  }
  &-subtitle {
    margin: 0 auto 16px;
    border-right: 2px solid #cfd0d8;
    overflow: hidden;
    white-space: nowrap;
    font-size: 10px;
    font-weight: 100;
    color: #cfd0d8;
    text-align: center;
    &--typewriter {
    animation: typing 2s steps(38),
               blinkTextCursor 500ms steps(44) infinite normal;
    }
  }
  &-content {
    flex: 0 1 auto;
    &__slide-down {
      position: absolute;
      bottom: 0;
      padding: 20px; 
      cursor: pointer;
    }
  }
}
@media (min-width: 300px) {
  .entrance-title {
    font-size: 50px;
  }
}
@media (min-width: 600px) {
  .entrance-title {
    font-size: 80px;
  }
}
@media (min-width: 800px) {
  .entrance-title {
    font-size: 120px;
  }
}
@media (min-width: 800px) {
  .entrance-title--flagpole {
    display: inline-block;
    height: 150px;
    width: 4px;
    background-color: #fb8c00;
    vertical-align: bottom;
  }
}
@media (min-width: 800px) {
  .entrance-title--flag {
    display: inline-block;
    position: relative;
    height: 60px;
    top: -140px;
    left: -30px;
    padding: 15px;
    width: auto;
    color: white;
    background-color: #fb8c00;
    font-size: 25px;
  }
}
@media (min-width: 300px) {
  .entrance-subtitle {
    width: calc(12.5*19px);
    font-size: 12.5px;
  }
}
@media (min-width: 600px) {
  .entrance-subtitle {
    width: calc(14*19px);
    font-size: 14px;
  }
}
@media (min-width: 800px) {
  .entrance-subtitle {
    width: calc(18*19px);
    font-size: 18px;
  }
}
@keyframes typing {
  from{width: 0;}
  to{width: default;}
}
@keyframes blinkTextCursor {
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
@media (min-width: 600px) {
  .entrance-content__button-group {
    width: 500px;
  }
}
</style>


