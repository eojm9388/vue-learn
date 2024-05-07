<template>
  <div>
    <h3>자식 페이지입니다.</h3>
    <p>{{ childInfo.name }}</p>
    <p>{{ childInfo.age }}</p>
    <p>{{ childInfo.balance }}</p>
    <button @click="giveMeAllowance">용돈 주세요.</button>
  </div>
</template>

<script setup>
const child = defineProps({
  childInfo: Object
})

const emit = defineEmits(['giveMeAllowance'])
const giveMeAllowance = function() {
  emit('giveMeAllowance')
}

// console.log(child.childInfo)

</script>

<style scoped>

</style>