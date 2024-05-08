<template>
  <div>
    <h2>학생 상세 정보 목록 입니다.</h2>
    <p v-for="student in students" :key="student.id"
      @click=goDetail(student)>
      {{ student.name }} 학생 정보 보기
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const students = ref([
  { id: 1, name: '김하나'},
  { id: 2, name: '김두리'},
  { id: 3, name: '김서이'},
])

const router = useRouter()

const goDetail = function (student) {
  
  router.push({ name: 'student-detail', params:{ 'name': student.name } })
}

</script>

<style scoped>

</style>