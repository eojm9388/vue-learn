<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainPage from './components/MainPage.vue';

</script>

<template>
  <MainPage />
  <RouterLink :to="{ name: 'some' }">some</RouterLink> | 
  <RouterLink :to="{ name: 'other' }">other</RouterLink>

  <RouterView />
</template>

<style scoped>

</style>
