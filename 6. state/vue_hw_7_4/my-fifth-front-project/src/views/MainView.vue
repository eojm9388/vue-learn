<template>
  <div>
    <h2>메인 페이지</h2>
    <MainPage 
    v-for="person in store.balances" :key="person.name"
    :person-info="person"
    />
    <button @click="show">잔액조회</button>

  </div>
</template>

<script setup>
import MainPage from '@/components/MainPage.vue';
import { useBalanceStore } from '@/stores/balance';

const store = useBalanceStore()
const show = function () {
  store.balances.forEach(element => {
    console.log(element)
  })
}
</script>

<style scoped>

</style>