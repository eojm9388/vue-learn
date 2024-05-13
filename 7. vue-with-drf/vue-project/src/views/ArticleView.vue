<template>
  <div>
    <h1>Article Page</h1>
    <RouterLink :to="{name: 'CreateView'}">[create]</RouterLink>

    <ArticleList />
  </div>
</template>

<script setup>
import ArticleList from '@/components/ArticleList.vue'
import CreateView from './CreateView.vue';
import { useCounterStore } from '@/stores/counter';
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

const store = useCounterStore()

onMounted(() => {
  store.getArticles()
})

</script>

<style>

</style>
