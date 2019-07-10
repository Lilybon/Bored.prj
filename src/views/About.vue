<template>
  <v-layout class="panel about" row wrap>
    <v-flex class="about__info" pa-3 xs12 sm6>
      <h1>About</h1>
      <h2>製作者</h2>
      <a class="warning--text" href="https://github.com/Lilybon" target="_blank">Lilybon</a>
      <h2>API</h2>
      <a class="warning--text" href="https://github.com/drewthoennes/Bored-API" target="_blank">Bored-API</a>
      <v-form v-model="valid" ref="feedback" lazy-validation>
        <h2>Feedback</h2>
        <div>
           <v-text-field
              v-model="feedbackTitle"
              :rules="[v => !!v || '標題不得為空！']"
              label="標題"
              color="warning"
              required
            ></v-text-field>
        </div>
        <div>
          <v-textarea
              v-model="feedbackContent"
              name="feedback"
              label="內文"
              value=""
              hint="請用至少15字描述"
              color="warning"
              :rules="feedbackContentRules"
              auto-grow
            ></v-textarea>
        </div>
        <div>
          <v-btn :disabled="!valid" large color="warning" @click="validate">寄送Email</v-btn>
        </div>
      </v-form>
    </v-flex>
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
        window.open(`${ this.emailAddress }?subject=${ this.feedbackTitle }&body=${ this.feedbackContent }`);
      }
    }
  }
}
</script>

<style>

</style>

