import axios from '@/utils/request'
import qs from 'qs'
import store from '@/store'

// const getList = (options) => {
//   return axios.get('/public/list', {
//     params: {
//       catalog: options.catalog,
//       type: typeof options.type === 'undefined' || options.type === '' ? '' : options.type
//     }
//   })
// }

const getList = (options) => {
  return axios.get('/public/list?' + qs.stringify(options))
}

const getTips = () => {
  return axios.get('/public/tips')
}

const getTop = () => {
  return axios.get('/public/topWeek')
}

const getLinks = () => {
  return axios.get('/public/links')
}

// 图片上传接口
const uploadImg = (formData) => axios.post('/content/upload', formData)

// 发贴接口
const addPost = (data) => axios.post('/content/add', { ...data })

// 获取文章详情
const getDetail = (tid) => {
  const token = store.state.token
  let headers = {}
  if (token !== '') {
    headers = {
      headers: {
        Authorization: 'Bearer ' + store.state.token
      }
    }
  }
  return axios.get('/public/content/detail?tid=' + tid, headers)
}

// 更新文章，编辑帖子
const updatePost = (data) => axios.post('/content/update', { ...data })

export {
  getList,
  getTips,
  getLinks,
  getTop,
  uploadImg,
  addPost,
  getDetail,
  updatePost
}
