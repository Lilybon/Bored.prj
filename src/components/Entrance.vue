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
        window.scroll({
          top: window.innerHeight, 
          left: 0, 
          behavior: 'smooth'
        })
      }
    }
}
</script>

<style lang="scss">
$orange: #fb8c00;
$light-grey: #cfd0d8;
$dark: rgba(20,26,51,0.82);
.entrance {
  position: relative;
  background: url(https://images.theconversation.com/files/108832/original/image-20160121-9760-e1bi33.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip) no-repeat center;
  background-size: cover;
  &__container {
    position: relative;
    height: 100vh;
  }
  &__background {
    background: $dark;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  &-title {
    font: {
      family: 'Prosto One', cursive;
      size: 20px;
      weight: 300;
    }
    color: $light-grey;
    text-align: center;
    &--flag {
      display: none;
      @media (min-width: 800px) {
        display: inline-block;
        position: relative;
        height: 60px;
        top: -140px;
        left: -30px;
        padding: 15px;
        width: auto;
        color: light-grey;
        background-color: $orange;
        font-size: 25px;
      }
    }
    &--flagpole {
      display: none;
      @media (min-width: 800px) {
        display: inline-block;
        height: 150px;
        width: 4px;
        background-color: $orange;
        vertical-align: bottom;
      }
    }
    @media (min-width: 300px) {
      font-size: 50px;
    }
    @media (min-width: 600px) {
      font-size: 80px;
    }
    @media (min-width: 800px) {
      font-size: 120px;
    }
  }
  &-subtitle {
    margin: 0 auto 16px;
    border-right: 2px solid $light-grey;
    overflow: hidden;
    white-space: nowrap;
    font: {
      size: 10px;
      weight: 100;
    }
    color: $light-grey;
    text-align: center;
    &--typewriter {
    animation: typing 2s steps(38),
               blinkTextCursor 500ms steps(44) infinite normal;
    }
    @media (min-width: 300px) {
      width: calc(12.5*19px);
      font-size: 12.5px;
    }
    @media (min-width: 600px) {
      width: calc(14*19px);
      font-size: 14px;
    }
    @media (min-width: 800px) {
      width: calc(18*19px);
      font-size: 18px;
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
    &--slide-from-bottom-and-show {
      animation: 1s ease-out 0s 1 slideFromBottomAndShow;
    }
    &--show {
      animation: 1.5s ease-out 0s 1 showContent;
    }
    &__button-group {
      @media (min-width: 600px) {
        width: 500px;
      }
    }
  }
}
@keyframes typing {
  from{width: 0;}
  to{width: default;}
}
@keyframes blinkTextCursor {
  from{border-right-color: $light-grey;}
  to{border-right-color: transparent;}
}
</style>


