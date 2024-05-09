<template>
  <div>
    <h1>pinia 연습하기</h1>
    <div class="container">
      <ParentPage 
      v-for="family in store.familyInfo" :key="family.familyName"
      :family-info="family"
      />
    </div>
  </div>
</template>

<script setup>
import ParentPage from './ParentPage.vue';
import { useFamilyStore } from '@/stores/familyInfos';

const store = useFamilyStore() 

</script>

<style scoped>
.container {
  
}
</style>