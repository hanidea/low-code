<template>
  <div class="order">
    <div class="left">
      <ul>
        <li v-for="(item,index) in lists" :key="'order'+index">
          {{item.name}}-{{item.price}}
          <button type="button" @click="minus(item,index)">-</button>
          <span>{{typeof item.num === 'undefined'? 0:item.num}}</span>
          <button type="button" @click="add(item,index)">+</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li v-for="(item,index) in orders" :key="'order'+index">
          名称：{{item.name}}-单价: {{item.price}}-单项总价：{{item.price*item.num}}
        </li>
      </ul>
      <p>总价{{total}}</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'OrderView',
  data () {
    return {
      lists: this.$store.state.lists
    }
  },
  computed: {
    // const arr = _.filter([1, 2, 3], (item) => item > 1)
    // console.log(arr)
    orders () {
      return _.filter(this.lists, (item) => typeof item.num !== 'undefined' && item.num > 0)
    },
    total () {
      let sum = 0
      _.each(this.orders, (item) => {
        sum += item.price * item.num
      })
      return sum
    }
  },
  methods: {
    minus (item, index) {
      if (typeof item.num === 'undefined') {
        item.num = 0
      }
      item.num--
      if (item.num < 0) {
        item.num = 0
      }
      this.$set(this.lists, index, item)
    },
    add (item, index) {
      if (typeof item.num === 'undefined') {
        item.num = 0
      }
      item.num++
      if (item.num > 100) {
        item.num = 100
      }
      this.$set(this.lists, index, item)
    }
  }
}
</script>
