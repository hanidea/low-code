import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
// import VeeValidate, { Validator } from 'vee-validate'
// // import zh from 'vee-validate/dist/locale/zh_CN'
// import './local/index'
//
// Vue.use(VeeValidate)
// Validator.localize('zh-CN', zh)

// const validator = new Validator()
// validator.localize('zh-CN')

import '@/utils/veevalidate-i18n'

Vue.config.productionTip = false

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'http://your.domain.com'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
