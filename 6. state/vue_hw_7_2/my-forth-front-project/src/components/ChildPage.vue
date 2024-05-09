<template>
  <div>
    <div class="container">
      <h2>자식 컴포넌트</h2>
      {{ childName }}
    </div>
  </div>
</template>

<script setup>
import { useFamilyStore } from '@/stores/familyInfos'

defineProps({
  childName: String,
})

</script>

<style scoped>
.container {
  width: 60%;
  margin: 20px auto;
  padding-bottom: 20px;

  text-align: center;
  background-color: white;
  border: 1px solid rgb(189, 189, 194);
  border-radius: 10px;
}
</style>