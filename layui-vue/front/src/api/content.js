import axios from '@/utils/request'
import qs from 'qs'

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

export {
  getList,
  getTips,
  getLinks,
  getTop
}
