<template>
  <v-layout class="panel about" row wrap>
    <v-flex class="about__info" pa-3 xs12 sm6>
      <h1>About</h1>
      <h2>製作者</h2>
      <a href="https://github.com/Lilybon" target="_blank">Lilybon</a>
      <h2>API</h2>
      <a href="https://github.com/drewthoennes/Bored-API" target="_blank">Bored-API</a>
      <v-form v-model="valid">
        <div>
          <v-textarea
              name="feedback"
              label="請務必給我些可以改進的建議"
              value=""
              hint="Hint text"
              color="warning"
              auto-grow
            ></v-textarea>
        </div>
        <div>
          <v-btn large color="warning">寄送Email</v-btn>
        </div>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>

</style>

