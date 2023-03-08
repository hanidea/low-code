import axios from '@/utils/request'
import qs from 'qs'
// 用户签到
const userSign = () => {
  return axios.get('/user/fav')
}

const updateUserInfo = (data) => axios.post('user/basic', data)

// 确认修改用户名
const updateUsername = (data) => axios.get('public/reset-email?' + qs.stringify(data))

// 修改用户密码
const changePasswd = (data) => axios.post('/user/change-password', {
  ...data
})

export {
  userSign,
  updateUserInfo,
  updateUsername,
  changePasswd
}