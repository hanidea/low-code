import axios from '@/utils/request'

const getCode = (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

const forget = (option) => {
  return axios.post('/login/forget', { ...option })
}

const login = (loginInfo) => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

const reg = (regInfo) => {
  return axios.post('/login/reg', {
    ...regInfo
  })
}

/**
 * 重置密码接口
 * @param {*} info 重置密码信息
 */
const reset = (info) => axios.post('/login/reset', { ...info })

export { getCode, forget, login, reg, reset }
