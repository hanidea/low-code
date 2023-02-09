import mock from 'mockjs'
// 这个一个获取URL参数的方法
// import { getParams } from './utils'

mock.mock('http://your.domain.com/test', {
  'users|1-10': [{
    'id|+1': 1,
    'name': '@cname',
    'city': '@city',
    'image': '@image'
  }]
})


// 在这里编写你的逻辑代码

