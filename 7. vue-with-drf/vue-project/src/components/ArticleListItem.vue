<template>
  <div>
    <h2>{{ article.id }}</h2>
    <p>{{ article.title }}</p>
    <p>{{ article.content }}</p>
    <RouterLink :to="{ name: 'DetailView' , params: { id: article.id } }">[detail]</RouterLink>
    <hr>
  </div>
</template>

<script setup>
defineProps({
  article: Object
})

import { RouterLink } from 'vue-router'
</script>
