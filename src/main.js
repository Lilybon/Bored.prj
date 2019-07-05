import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)

Vue.filter('chinese-category-format', (englishText) => {
  const categories = store.state.categories
  let result = categories.filter((category) => category.value === englishText)
  return result.length ? result[0].text : englishText;
})

export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
