<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <div class="avatar-add">
        <p>建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB</p>
        <label for="pic" class="layui-btn upload-img">
          <i class="layui-icon">&#xe67c;</i>上传头像
        </label>
        <input id="pic" type="file" name="file" accept="image/png,image/gif,image/jpg" @change="upload">
        <img :src="pic">
        <span class="loading"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadImg } from '@/api/content'
import { updateUserInfo } from '@/api/user'
import config from '@/config'
export default {
  name: 'pic-upload',
  data () {
    return {
      // 判断 userInfo & pic 是否存在
      pic: (this.$store.state.userInfo && this.$store.state.userInfo.pic) ? this.$store.state.userInfo.pic : '/img/header.jpg',
      formData: ''
    }
  },
  methods: {
    upload (e) {
      // console.log('TCL', e)
      const file = e.target.files
      const formData = new FormData()
      if (file.length > 0) {
        formData.append('file', file[0])
        console.log(file[0])
        this.formData = formData
      }
      // 上传图片的只有 uploadImg
      uploadImg(formData).then((res) => {
        console.log('res', res)
        if (res.code === 200) {
          const baseUrl = process.env.NODE_ENV === 'production'
            ? config.baseUrl.pro
            : config.baseUrl.dev
          this.pic = baseUrl + res.data
          updateUserInfo({ pic: this.pic }).then((res) => {
            if (res.code === 200) {
              const user = this.$store.state.userInfo
              user.pic = this.pic
              this.$store.commit('setUserInfo', user)
              this.$alert('图片上传成功')
            }
          })
          document.getElementById('pic').value = ''
        }
      })
    }
  }
}
</script>

<style scoped>
#pic {
  display: none;
}
</style>
