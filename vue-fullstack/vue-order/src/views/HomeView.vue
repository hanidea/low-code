<template>
  <div class="home">
    <div class="left">
      <form v-if="isShow">
        <div class="item">
          名称
          <input type="text" v-model="unit.name">
        </div>
        <div class="item">
          图片
          <input type="text" v-model="unit.url">
        </div>
        <div class="item">
          分类
          <input type="text" v-model="unit.type">
        </div>
        <div class="item">
          价格
          <input type="text" v-model="unit.price">
        </div>
        <button type="button" @click="submit()">确定</button>
      </form>
      <div class="info" v-else>
        {{unit.name}}-{{unit.url}}--{{unit.type}}--{{unit.price}}
        <div class="ctrl">
          <button type="button" @click="add">添加</button>
          <button type="button" @click="cancel">取消</button>
        </div>
      </div>
    </div>
    <div class="right">
      <ul>
        <li v-for="(item,index) in lists" :key="index">
          {{item.name}}-{{item.url}}--{{item.type}}--{{item.price}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      isShow: true,
      unit: {
        name: '',
        url: '',
        type: '',
        price: ''
      },
      lists: []
    }
  },
  components: {
  },
  mounted () {
    this.lists = this.$store.state.lists
  },
  methods: {
    submit () {
      this.isShow = false
    },
    add () {
      this.lists.push({ ...this.unit })
      this.$store.commit('setList', this.lists)
      this.unit.name = ''
      this.unit.url = ''
      this.unit.type = ''
      this.unit.price = ''
      this.isShow = true
    },
    cancel () {
      this.isShow = true
    }
  }
}
</script>

<style lang="scss">
</style>
