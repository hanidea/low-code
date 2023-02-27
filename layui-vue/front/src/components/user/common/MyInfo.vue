<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <form method="post">
      <div class="layui-form-item">
        <label for="L_email" class="layui-form-label">邮箱</label>
        <div class="layui-input-inline">
          <input type="text" id="L_email" name="email" required lay-verify="email" autocomplete="off" value="" class="layui-input" v-model="username">
        </div>
        <div class="layui-form-mid layui-word-aux">如果您在邮箱已激活的情况下，变更了邮箱，需<a href="activate.html" style="font-size: 12px; color: #4f99cf;">重新验证邮箱</a>。</div>
      </div>
      <div class="layui-form-item">
        <label for="L_username" class="layui-form-label">昵称</label>
        <div class="layui-input-inline">
          <input type="text" id="L_username" name="username" required lay-verify="required" autocomplete="off" value="" class="layui-input" v-model="name">
        </div>
        <div class="layui-inline">
          <div class="layui-input-inline gray mt1 ml1">
            <label for="gender1" class="mr1">
              <input type="radio" id="gender1" name="sex" v-model="gender" value="0" checked title="男">
              <i class="layui-icon layui-icon-circle" :class="{'layui-icon-radio':gender === '0'}"></i>
              男
            </label>
            <label for="gender2">
              <input type="radio" id="gender2" name="sex" v-model="gender" value="1" title="女">
              <i class="layui-icon layui-icon-circle" :class="{'layui-icon-radio':gender === '1'}"></i>
              女
            </label>
          </div>
        </div>
      </div>
      <div class="layui-form-item">
        <label for="L_city" class="layui-form-label">城市</label>
        <div class="layui-input-inline">
          <input type="text" id="L_city" name="city" autocomplete="off" value="" v-model="location" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item layui-form-text">
        <label for="L_sign" class="layui-form-label">签名</label>
        <div class="layui-input-block">
          <textarea placeholder="随便写些什么刷下存在感" v-model="regmark" id="L_sign"  name="sign" autocomplete="off" class="layui-textarea" style="height: 80px;"></textarea>
        </div>
      </div>
      <div class="layui-form-item">
        <button class="layui-btn" key="set-mine" lay-filter="*" lay-submit>确认修改</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'myinfo',
  data () {
    return {
      username: '',
      name: '',
      location: '',
      gender: '',
      regmark: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.layui-icon-radio {
  color: #5fb878;
}
</style>
