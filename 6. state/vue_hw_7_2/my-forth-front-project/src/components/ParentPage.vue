<template>
  <div>
    <div class="container">
      <h2>부모 컴포넌트</h2>
      <p>{{ familyInfo.father }}</p>
      <p>{{ familyInfo.mother }}</p>
      <ChildPage 
      v-for="child in familyInfo.children" :key="child.name"
      :child-name="child.name"
      />
    </div>
  </div>
</template>

<script setup>
import ChildPage from './ChildPage.vue';
defineProps({
  familyInfo: Object
})

</script>

<style scoped>
.container {
  width: 80%;
  height: 450px;
  margin: 20px auto;
  text-align: center;
  border: 1px solid rgb(189, 189, 194);
  border-radius: 10px;
  background-color: rgb(240, 240, 240);
}
</style>