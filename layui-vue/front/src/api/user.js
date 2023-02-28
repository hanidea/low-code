import axios from '@/utils/request'
// 用户签到
const userSign = () => {
  return axios.get('/user/fav')
}

const updateUserInfo = (data) => axios.post('user/basic', data)
export {
  userSign,
  updateUserInfo
}
