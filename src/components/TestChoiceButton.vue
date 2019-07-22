<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <div
        class="choice choice--appear"
        :class="{...classObject, 'choice--like': choice, 'choice--dislike': !choice}"
        @click="makeChoice"
        @dragover="dragOver"
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        @drop="dragDrop"
        v-on="on"
        :data-step="step"
        :data-intro="intro"
      >
        <v-icon class="choice__icon" size="5vmax" color="white">{{ choice ? 'check' : 'close' }}</v-icon>
      </div>
    </template>
    <span>{{ choice ? '聽起來不錯！' : '...無聊，沒興趣。' }}</span>
  </v-tooltip>
</template>

<script>
import { bus } from "../main";

export default {
  props: {
    choice: Boolean,
    step: Number,
    intro: String
  },
  data() {
    return {
      classObject: {
        "choice--hover": false
      }
    };
  },
  methods: {
    makeChoice(e) {
      if (
        (e.target.nodeName === "I" && e.target.innerHTML === "check") ||
        (e.target.nodeName === "DIV" &&
          e.target.className.indexOf("choice--like") > -1)
      ) {
        this.$emit("makeDecision", true);
        bus.$emit("resetTestCard");
      } else if (
        (e.target.nodeName === "I" && e.target.innerHTML === "close") ||
        (e.target.nodeName === "DIV" &&
          e.target.className.indexOf("choice--dislike") > -1)
      ) {
        this.$emit("makeDecision", false);
        bus.$emit("resetTestCard");
      }
    },
    dragOver(e) {
      e.preventDefault();
      this.classObject["choice--hover"] = true;
    },
    dragEnter(e) {
      e.preventDefault();
      this.classObject["choice--hover"] = true;
    },
    dragLeave() {
      this.classObject["choice--hover"] = false;
    },
    dragDrop(e) {
      this.classObject["choice--hover"] = false;
      setTimeout(() => {
        this.makeChoice(e);
      }, 0);
    }
  }
};
</script>

<style lang="scss">
@keyframes scaleUpShow {
  0% {
    transform: scale(0, 0);
  }
  75% {
    transform: scale(1.3, 1.3);
  }
  100% {
    transform: scale(1, 1);
  }
}
.choice {
  position: absolute;
  z-index: 10;
  top: 70vh;
  height: 10vmax;
  width: 10vmax;
  max-height: 150px;
  max-width: 150px;
  border-radius: 5vmax;
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.3s ease-out 0s;
  &--hover,
  &:hover {
    transform: scale(1.3, 1.3);
    transition: transform 0.3s ease-out 0s;
  }
  &:hover {
    @media (hover: none) {
      transform: scale(1, 1);
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -2.5vmax 0 0 -2.5vmax;
  }
  &--like {
    right: 5vw;
    background-color: #0ab97f;
  }
  &--dislike {
    left: 5vw;
    background-color: #d81503;
  }
  &--appear {
    animation: 0.5s ease-out 0s 1 scaleUpShow;
  }
}
</style>


