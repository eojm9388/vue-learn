<template>
  <div>
    <h3>name: {{ personInfo.name }}</h3>
    <h3>balance: {{ personInfo.balance }}</h3>
    <button @click="increaseBalance(personInfo.name)">+</button>
    
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useBalanceStore } from '@/stores/balance';

const store = useBalanceStore()
const route = useRoute()

const personInfo = store.findPersonInfo(route.params.name)
const increaseBalance = function (name) {
  store.increaseBalance(name)
}

</script>

<style scoped>

</style>