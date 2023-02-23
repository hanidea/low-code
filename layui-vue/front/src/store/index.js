import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    isLogin: false,
    token: '',
    userInfo: {}
  },
  getters: {
  },
  mutations: {
    setSid (state, value) {
      state.sid = value
    },
    setToken (state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    setUserInfo (state, value) {
      if (value === '') return
      state.userInfo = value
      localStorage.setItem('userInfo', JSON.stringify(value))
    },
    setIsLogin (state, value) {
      state.isLogin = value
    }
  },
  actions: {
  },
  modules: {
  }
})
