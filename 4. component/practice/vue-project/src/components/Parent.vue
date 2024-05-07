<template>
  <div>
    <ParentChild my-msg="message!!" :dynamic="name" @some-event="someCallBack" @my-focus="someCallBack" @emit-args="callBack" @change-name="changeName"/>
    <ParentItem 
      v-for="item in items" :key="item.id" :my-prop="item"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ParentChild from '@/components/ParentChild.vue';
import ParentItem from '@/components/ParentItem.vue';

const name = ref('Alice')

const items = ref([
  { id: 1, name: '사과'},
  { id: 2, name: '바나나'},
  { id: 3, name: '딸기'},
])

const someCallBack = function () {
  console.log('수신!')
}

const callBack = function(...nums) {
  console.log(nums)
}

const changeName = function(aftername) {
  name.value = aftername
}

</script>

<style scoped>

</style>