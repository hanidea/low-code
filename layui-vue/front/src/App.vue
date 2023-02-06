<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-inline">
          <input type="text" name="name" v-model="name" v-validate="'required|email'" placeholder="请输入用户名" autocomplete="off" class="layui-input">
        </div>
        <div class="error layui-form-mid">{{errors.first('name')}}</div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-inline">
          <input type="password" name="password" v-model="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
        </div>
        <div class="layui-form-mid layui-word-aux svg" @click="getCaptcha()" v-html="svg"></div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-block">
          <input type="text" name="title" v-model="code" required  lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input">
        </div>
      </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a class="hanhan_link" href="http://www.ilayuis.com">忘记密码?</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then((res) => {
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container{
  background: #fff;
}
input {
  width: 190px;
}
.hanhan_link
{
  margin-left: 10px;
  &:hover {
    color: #009688
  }
}
.svg
{
  position: relative;
  top: -15px;
}
</style>
