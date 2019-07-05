<template>
  <v-app>
    <v-container>
      <router-view></router-view>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
@keyframes slideFromBottomAndShow {
  0% {
    margin-top: 20vh;
    opacity: 0;
  }
  75% {
    margin-top: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slidefomRightAndShow {
  0% {
    left: 50px;
    opacity: 0;
  }
  75% {
    left: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes showContent {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.theme--light.v-icon {
  color: rgba(117, 68, 44, 0.55);
}
.application--wrap {
  background-color: #35326b;
}

.container {
  max-width: 1000px;
}

.panel {
  background-color: #fff6de;
  border-radius: 5px;
  overflow: hidden;
}
.panel-content {
  position: static;
}
.panel-content--show-1 {
  animation: .4s ease-out 0s 1 showContent; 
}
.panel-content--show-2 {
  animation: .8s ease-out 0s 1 showContent; 
}
.panel-content--show-3 {
  animation: 1.2s ease-out .0s 1 showContent; 
}
.panel-content--show-4 {
  animation: 1.6s ease-out 0s 1 showContent; 
}
.panel-content--slide-from-right {
  animation: .4s ease-out 0s 1 slidefomRightAndShow;
}
.panel-content__description {
    position: relative;
    padding-left: 10px;
    margin: 10px 0;
    border-left: 3px solid #bdb6a5;
}
</style>
