<template>
  <div>
    <h2>DetailView</h2>
    <div v-if="article">
      <p>{{ article.id }}</p>
      <p>{{ article.title }}</p>
      <p>{{ article.content }}</p>
      <p>{{ article.created_at }}</p>
      <p>{{ article.updated_at }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useCounterStore } from '@/stores/counter';
import { useRoute } from 'vue-router'


const store = useCounterStore()
const route = useRoute()

const article = ref(null)

onMounted(() => {
  axios({
    method: 'get',
    url: `${store.API_URL}/articles/${route.params.id}/`
  })
    .then(res => {
      article.value = res.data
    })
    .catch(err => {
      console.log(err)
    })
})

</script>

<style>

</style>
