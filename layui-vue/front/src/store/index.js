import Vue from 'vue'
import Vuex from 'vuex'
import WebSocketClient from '@/utils/websocket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    isLogin: false,
    token: '',
    userInfo: {},
    inHide: false,
    ws: null
  },
  getters: {
  },
  mutations: {
    initWebSocket (state, config) {
      state.ws = new WebSocketClient(config)
      state.ws.init()
    },
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
    },
    setMessage (state, value) {
      console.log(value)
    }
  },
  actions: {
    message ({ commit }, msg) {
      commit('setMessage', msg)
    }
  },
  modules: {
  }
})
