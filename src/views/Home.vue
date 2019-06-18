<template>
  <div>
    <button @click="add_item">ADD</button>
    <p v-for="item in bookList" :key="item.id" @click="delete_item(item.id)">{{item.name}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'Home',
  // 方法一： 通过computed的计算属性直接赋值，computed属性可以在输出前，对data中的值进行改变，我们就利用这种特性把state值赋值给vue模板中的data进行使用
  computed: {
    // bookList() {
    //   return this.$store.state.bookList;
    // }

    // 方法二： 通过mapState的对象来赋值
    ...mapState(['bookList'])
  },
  methods: {
    add_item() {
      let newObject = {id: this.bookList.length, name: '葫芦娃'}
      this.$store.dispatch('add_item', newObject)
    },
    delete_item(id) {
      this.$store.dispatch('del_item', id)
    }
  },
  mounted() {
    console.log(this.$store.getters.newBookList)
    console.log(this.bookList)
  }


}
</script>

<style>

</style>
