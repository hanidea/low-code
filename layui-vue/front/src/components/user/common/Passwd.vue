<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <form>
      <validation-observer ref="observer" v-slot="{ validate }">
          <div class="layui-form-item">
            <validation-provider name="oldpassword" rules="required|min:6|max:16" v-slot="{errors}">
            <label class="layui-form-label">当前密码</label>
            <div class="layui-input-inline">
              <input type="password" v-model="oldpassword"  autocomplete="off" class="layui-input">
            </div>
            <div class="layui-row">
              <span style="color: #c00;">{{errors[0]}}</span>
            </div>
            </validation-provider>
          </div>
          <div class="layui-form-item">
            <validation-provider
              name="password"
              rules="required|min:6|max:16|confirmed:confirmation"
              v-slot="{errors}"
            >
            <label class="layui-form-label">新密码</label>
            <div class="layui-input-inline">
              <input type="password" v-model="password" required lay-verify="required" autocomplete="off" class="layui-input">
            </div>
            <div class="layui-form-mid layui-word-aux">6到16个字符</div>
            <div class="layui-row">
              <span style="color: #c00;">{{errors[0]}}</span>
            </div>
        </validation-provider>
          </div>
          <div class="layui-form-item">
            <validation-provider v-slot="{ errors }" vid="confirmation">
            <label class="layui-form-label">确认密码</label>
            <div class="layui-input-inline">
              <input type="password" v-model="repassword"  autocomplete="off" class="layui-input">
            </div>
              <div class="layui-row">
                <span style="color: #c00;">{{errors[0]}}</span>
              </div>
            </validation-provider>
          </div>
      <div class="layui-form-item">
        <button class="layui-btn" @click="validate().then(submit)">确认修改</button>
      </div>
      </validation-observer>
    </form>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { changePasswd } from '@/api/user'
export default {
  name: 'password',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      oldpassword: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        // ABORT!!
        return
      }
      if (this.oldpassword === this.password) {
        this.$alert('新旧密码不得相同！')
        return
      }
      changePasswd({
        oldpwd: this.oldpassword,
        newpwd: this.password
      }).then((res) => {
        if (res.code === 200) {
          this.$alert('密码更新成功！')
          this.oldpassword = ''
          this.password = ''
          this.repassword = ''
          requestAnimationFrame(() => {
            this.$refs.observer.reset()
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
