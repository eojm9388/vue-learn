<template>
  <div>
    <RouterLink :to="{ name: 'user-profile' }">Profile</RouterLink>
    <RouterLink :to="{ name: 'user-posts' }">Posts</RouterLink>
    <h1>userview</h1>
    <h2>{{ $route.params.id }}</h2>
    <h2>{{ userId }}</h2>
    <button @click="goHome">홈으로!</button>
    <button @click="routeUpdate">100번 유저</button>
    <hr>
    <RouterView />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
const userId = ref(route.params.id)

const router = useRouter()
const goHome = function() {
  router.push({name : 'home'})
  router.replace({name : 'home'})
}

const routeUpdate = function () {
  router.push({ name:'user', params:{ 'id': 100 } })
}


onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('정말 떠나실 건가요?')

  if (!answer) {
    return false
  }
})

onBeforeRouteUpdate((to, from) => {
  userId.value = to.params.id
})

</script>

<style scoped>

</style>