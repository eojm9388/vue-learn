<template>
  <div>
    <p>이름: {{ personInfo.name }}</p>
    <p>잔고: {{ personInfo.balance }}</p>
    <button @click="goUpdate(personInfo.name)">updateBalance</button> 
    <hr>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
  personInfo: Object
})

const router = useRouter()

const goUpdate = function (name) {
  router.push({ name: 'update' , params:{ 'name': name }})
}


</script>

<style scoped>
button {
  color: white;
  background-color: #6698cb;
  border-radius: 10px;
  border-color: rgb(180, 180, 190);
  height: 40px;
  padding: 10px;

}
</style>