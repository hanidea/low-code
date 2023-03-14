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

// 获取用户未读消息
const getMsg = (data) => axios.get('/user/getmsg?' + qs.stringify(data))

// 设置收藏 & 取消收藏
const addCollect = (data) => axios.get('/user/setCollect?' + qs.stringify(data))

// 获取收藏列表
const getCollect = (data) => axios.get('/user/collect?' + qs.stringify(data))

// 获取发表的文章列表
const getPostListByUid = (data) => axios.get('/user/post?' + qs.stringify(data))

// 删除指定文章列表
const deletePostByUid = (data) => axios.get('/user/deletePost?' + qs.stringify(data))

// 获取用户的基本信息
const getInfo = (data) => axios.get('/public/info?' + qs.stringify(data))

export {
  userSign,
  updateUserInfo,
  updateUsername,
  changePasswd,
  getMsg,
  addCollect,
  getCollect,
  getPostListByUid,
  deletePostByUid,
  getInfo
}
