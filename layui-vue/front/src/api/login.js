import axios from '@/utils/request'

const getCode = (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

const forget = (option) => {
  return axios.post('/forget', { ...option })
}

const login = (loginInfo) => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

export { getCode, forget, login }
