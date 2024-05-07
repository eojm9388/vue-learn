<template>
  <div>
    <p>{{ myProp.name }}</p>
  </div>
</template>

<script setup>
defineProps({
  myProp: Object
})
</script>

<style scoped>

</style>