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

import '@/utils/veevalidate'
import Alert from './components/modules/alert'
import Pop from './components/modules/pop'
import filters from '@/utils/filter'
import directives from '@/utils/directives'
Vue.use(Alert)
Vue.use(Pop)
Vue.config.productionTip = false

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'http://your.domain.com'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
