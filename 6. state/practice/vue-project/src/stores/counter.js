import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let id = 0
  const todos = ref([
    
  ])

  const addTodo = function (textInput) {
    todos.value.push({
      id: id++, text: textInput, isDone: false
    })
  }

  const deleteTodo = function (id) {
    const index = todos.value.findIndex((todo) => todo.id === id)
    todos.value.splice(index, 1)
  }

  const updateTodo = function (id) {
    console.log(id)
    todos.value = todos.value.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
  }

  const doneTodoCount = computed(() => {
    const doneTodos = todos.value.filter((todo) => todo.isDone)
    return doneTodos.length
  })

  return { todos, addTodo, deleteTodo, updateTodo, doneTodoCount }
}, { persist: true })
