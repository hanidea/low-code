import axios from '@/utils/request'
import qs from 'qs'
import store from '@/store'

// 获取文章中的评论列表
const getComents = (params) => {
  const token = store.state.token
  let headers = {}
  if (token !== '') {
    headers = {
      headers: {
        Authorization: 'Bearer ' + store.state.token
      }
    }
  }
  return axios.get('/public/comments?' + qs.stringify(params), headers)
}

export {
  getComents
}
