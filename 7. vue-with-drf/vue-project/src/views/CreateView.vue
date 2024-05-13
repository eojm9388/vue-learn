<template>
  <div>
    <h1>게시글 작성</h1>
    <form action="" @submit.prevent="createArticle">
      <input type="text" v-model.trim="title">
      <textarea cols="30" rows="10" v-model.trim="content"></textarea>
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter';

const title = ref(null)
const content = ref(null)
const router = useRouter()

const store = useCounterStore()

const createArticle = function() {
  axios({
    method: 'post',
    url: `${store.API_URL}/articles/`,
    data: {
      title: title.value,
      content: content.value
    }
  })
    .then(res => {
      console.log(res.data)
      router.push({ name: 'ArticleView' })
    })
    .catch(err => {
      console.log(err)
    })
}

</script>

<style>

</style>
