import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
// import zh from 'vee-validate/dist/locale/zh_CN'
import './local/index'

Vue.use(VeeValidate)
// Validator.localize('zh-CN', zh)

const validator = new Validator()
validator.localize('zh-CN')

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
