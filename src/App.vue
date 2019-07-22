<template>
  <v-app dark>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer
  },
  data() {
    return {
      //
    };
  }
};
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
    transform: translate(50px);
    opacity: 0;
  }
  75% {
    transform: translate(0);
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
  max-width: 1400px;
}

.panel {
  background-color: #484642;
  border-radius: 1px solid#6d5c6d;
  border-radius: 5px;
}
.panel-content {
  position: static;
}
.panel-content--show-1 {
  animation: 0.5s ease-out 0s 1 showContent;
}
.panel-content--show-2 {
  animation: 1s ease-out 0s 1 showContent;
}
.panel-content--show-3 {
  animation: 1.5s ease-out 0s 1 showContent;
}
.panel-content--show-4 {
  animation: 2s ease-out 0s 1 showContent;
}
.panel-content--slide-from-right {
  animation: 0.4s ease-out 0s 1 slidefomRightAndShow;
}
.panel-content__description {
  position: relative;
  padding-left: 10px;
  margin: 10px 0;
  border-left: 3px solid #bdb6a5;
  line-height: 2rem;
}
</style>
