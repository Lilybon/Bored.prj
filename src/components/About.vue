<template>
    <v-layout class="about" row wrap>
        <v-flex class="about__info" pa-3 xs12 sm5 md5>
            <h2 class="about__title about__title--main font-weight-light text-xs-center text-sm-left">About<p class="hidden-sm-and-up headline">● ● ●</p></h2>
            <p class="about__paragraph white--text">這是一個找不到該用什麼api好好做side project的junior前端碼農做的小小專案。如果你對做出這鬼東西的人有興趣請點製作者觀看github的其他練習作品，對這API有興趣請看bored api的官方文件。</p>
            <h2 class="about__title white--text font-weight-light">製作者</h2>
            <p class="about__content panel-content--slide-from-right"><a href="https://github.com/Lilybon" target="_blank">Lilybon</a></p>
            <h2 class="about__title white--text font-weight-light">API</h2>
            <p class="about__content panel-content--slide-from-right"><a href="https://github.com/drewthoennes/Bored-API" target="_blank">Bored-API</a></p>
            <h2 class="about__title white--text font-weight-light">技術棧</h2>
            <p class="about__content panel-content--slide-from-right">
              <a href="https://vuejs.org/" target="_blank">Vue</a>
              <a href="https://vuex.vuejs.org/zh/guide/mutations.html" target="_blank">Vuex</a>
              <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a>
            </p>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex class="about__info" pa-3 xs12 sm6 md5>
            <v-form v-model="valid" ref="feedback" lazy-validation>
                <h2 class="about__title about__title--main font-weight-light text-xs-center text-sm-left">Feedback<p class="hidden-sm-and-up headline">● ● ●</p></h2>
                <p class="about__paragraph white--text">如果這個無聊專案遇到什麼奇妙的怪bug讓你很不痛快或畫面醜得讓你不忍直視，認為還有值得改進的地方，都歡迎透過以下表格寄信跟我開噴或指教，謝謝！</p>
                <div class="panel-content--show-2">
                  <v-text-field
                      prepend-icon="mail"
                      v-model="feedbackTitle"
                      :rules="[v => !!v || '標題不得為空！']"
                      color="white"
                      background-color="#221a29"
                      solo
                      required
                      flat
                  ></v-text-field>
                </div>
                <div class="panel-content--show-3">
                  <v-textarea
                      prepend-icon="textsms"
                      v-model="feedbackContent"
                      name="feedback"
                      value=""
                      hint="請用至少15字描述"
                      color="white"
                      background-color="#221a29"
                      solo
                      :rules="feedbackContentRules"
                      auto-grow
                      flat
                    ></v-textarea>
                </div>
                <div class="panel-content--show-4">
                <v-btn class="white--text" :disabled="!valid" large color="#fb8c00" @click="validate">寄送Email</v-btn>
                </div>
            </v-form>
        </v-flex>
        <v-spacer></v-spacer>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      emailAddress: 'zebra10029@gmail.com',
      feedbackTitle: '',
      feedbackContent: '',
      feedbackContentRules: [
        v => !!v || '建議不得為空！',
        v => (v && v.length >= 15) || '請具體描述建議或問題，至少15字！'
      ]
    }
  },
  methods: {
    validate() {
      if (this.$refs.feedback.validate()) {
        window.open(`mailto:${ this.emailAddress }?subject=${ this.feedbackTitle }&body=${ this.feedbackContent }`)
      }
    }
  }
}
</script>

<style lang="scss">
$white: white;
$yellow: #f9c370;
$pink: #d29ebf;
.about {
    background-color: #41364a;
    &__info {
      color: $white;
    }
    &__title {
      margin-bottom: 10px;
      &--main {
        font: {
          family: 'Prosto One', cursive;
          size: 40px;
        }
        text-align: center;
        color: $yellow;
      }
    }
    &__paragraph {
      line-height: 2rem;
      padding: 0 10px;
    }
    &__content {
      padding-left: 15px;
      a {
        color: $yellow;
        padding-right: 10px;
        text-decoration: none;
      }
    }
    .theme--dark.v-input:not(.v-input--is-disabled) input, 
    .theme--dark.v-input:not(.v-input--is-disabled) textarea {
    color: $pink !important;
    }
}
</style>

