<script setup>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

import { useCounterStore } from './stores/counter';

const store = useCounterStore()

</script>

<template>
  <div>
    <h1>Todo Project</h1>
    <h2>완료된 Todo: {{ store.doneTodoCount }}</h2>
    <TodoForm />
   <TodoList />
  </div>
</template>

<style scoped>

</style>
