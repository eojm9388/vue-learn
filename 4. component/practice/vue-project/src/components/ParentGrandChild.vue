<template>
  <div>
    <p>{{ myMsg }}</p>
    <button @click="changeName">이름 변경</button>
  </div>
</template>

<script setup>
defineProps({
  myMsg: String
})

const emit = defineEmits(['changeName'])

const changeName = function() {
  emit('changeName', 'Jimin')
}
</script>

<style scoped>

</style>