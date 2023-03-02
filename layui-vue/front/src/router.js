import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'
import jwt from 'jsonwebtoken'
import moment from 'moment'

const Login = () => import(/* webpackChunkName: 'login' */'./views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */'./views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'forget' */'./views/Forget.vue')
const Index = () => import(/* webpackChunkName: 'index' */'./views/channels/Index.vue')
const Template1 = () => import(/* webpackChunkName: 'template1' */'./views/channels/Template1.vue')
const Center = () => import(/* webpackChunkName: 'center' */'./views/Center.vue')
const UserCenter = () => import(/* webpackChunkName: 'usercenter' */'./components/user/Center.vue')
const Settings = () => import(/* webpackChunkName: 'settings' */'./components/user/Settings.vue')
const Posts = () => import(/* webpackChunkName: 'user-post' */'./components/user/Posts.vue')
const Msg = () => import(/* webpackChunkName: 'user-msg' */'./components/user/Msg.vue')
const Others = () => import(/* webpackChunkName: 'others' */'./components/user/Others.vue')
const User = () => import(/* webpackChunkName: 'home' */'./views/User.vue')
const MyInfo = () => import(/* webpackChunkName: 'info' */'./components/user/common/MyInfo.vue')
const PicUpload = () => import(/* webpackChunkName: 'pic' */'./components/user/common/PicUpload.vue')
const Passwd = () => import(/* webpackChunkName: 'password' */'./components/user/common/Passwd.vue')
const Accounts = () => import(/* webpackChunkName: 'accounts' */'./components/user/common/Accounts.vue')
const MyPost = () => import(/* webpackChunkName: 'mypost' */'./components/user/common/MyPost.vue')
const MyCollection = () => import(/* webpackChunkName: 'mycollection' */'./components/user/common/MyCollection.vue')
const NoFound = () => import(/* webpackChunkName: 'nofound' */'./views/NoFound.vue')
const Confirm = () => import(/* webpackChunkName: 'confirm' */'./views/Confirm.vue')
const Reset = () => import(/* webpackChunkName: 'reset' */'./views/Reset.vue')
Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'layui-this',
  // linkActiveClass: 'layui-this',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: '/index/:cataglog',
          name: 'cataglog',
          component: Template1
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    },
    {
      path: '/reset',
      name: 'reset',
      component: Reset
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
      beforeEnter: (to, from, next) => {
        if (from.name === 'login') {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/user',
      name: 'home',
      component: User
    },
    {
      path: '/center',
      component: Center,
      meta: { requiresAuth: true },
      linkActiveClass: 'layui-this',
      children: [
        {
          path: '',
          name: 'center',
          component: UserCenter
        },
        {
          path: 'set',
          component: Settings,
          children: [
            {
              path: '',
              name: 'info',
              component: MyInfo
            },
            {
              path: 'pic',
              name: 'pic',
              component: PicUpload
            },
            {
              path: 'passwd',
              name: 'passwd',
              component: Passwd
            },
            {
              path: 'account',
              name: 'account',
              component: Accounts
            }
          ]
        },
        {
          path: 'posts',
          component: Posts,
          children: [
            {
              path: '',
              name: 'mypost',
              component: MyPost
            },
            {
              path: 'mycollection',
              name: 'mycollection',
              component: MyCollection
            }
          ]
        },
        {
          path: 'msg',
          name: 'msg',
          component: Msg
        },
        {
          path: 'others',
          name: 'others',
          component: Others
        }
      ]
    },
    {
      path: '/404',
      component: NoFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (token !== '' && token !== null) {
    const payload = jwt.decode(token)
    // console.log('payload', payload)
    // console.log(moment().isBefore(moment(payload.exp * 1000)))
    if (moment().isBefore(moment(payload.exp * 1000))) {
      store.commit('setToken', token)
      store.commit('setUserInfo', userInfo)
      store.commit('setIsLogin', true)
    } else {
      localStorage.clear()
    }
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isLogin = store.state.isLogin
    if (isLogin) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
