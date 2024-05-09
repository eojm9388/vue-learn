<template>
  <div>
    <form action="" @submit.prevent="addTodo" ref="formElement">
      <input type="text" v-model="todoText">
      <input type="submit" value="작성">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const todoText = ref('')
const formElement = ref(null)


const addTodo = function () {
  store.addTodo(todoText.value)
  formElement.value.reset()
}


</script>

<style scoped>

</style>