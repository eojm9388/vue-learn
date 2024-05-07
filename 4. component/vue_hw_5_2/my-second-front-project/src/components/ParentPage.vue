<template>
  <div class="parent">
    <h1>부모 페이지입니다.</h1>
    <ChildPage 
    class="child"
    v-for="child in children" :key="child.id" :child-info="child"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildPage from '@/components/ChildPage.vue';

const children = ref([
  {id: 1, name:'김하나', age:30},
  {id: 2, name:'김두리', age:20},
  {id: 3, name:'김서이', age:10},
])

</script>

<style scoped>
.parent {
  border: 1px solid rgb(177, 151, 151);
}
.child {
  border: 1px solid rgb(177, 151, 151);
  margin: 10px;
  padding: 10px;

}
</style>