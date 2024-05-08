<template>
  <div>
    <div class="container">
      <h2>퀴즈 생성</h2>
      <form action="" @submit.prevent="createQuiz">
        <div class="question">
          <label for="question">문제</label>
          <textarea cols="30" rows="5" name="question" id="question"
          v-model="question"></textarea>
        </div>
        <div class="answer">
          <label for="answer">답안</label>
          <input type="text" name="answer" id="answer" v-model="answer">
        </div>
        <input type="submit" value="퀴즈 생성">
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const question = ref('')
const answer = ref('')

const emit = defineEmits(['createQuiz'])



const createQuiz = function(event) {
  const quiz = ref({
    question: question.value,
    answer: answer.value
  })
  question.value = ''
  answer.value = ''

  emit('createQuiz', quiz.value)
}

</script>

<style scoped>
.container {
  border: 1px solid rgb(211, 209, 245);
  background-color: aliceblue;
  border-radius: 10px;
  margin: 30px;
  padding: 20px;
  height: 380px;
}
.container label {
  display: block;
}
.container > form > div {
  margin-top: 20px;
}
input {
  margin-top: 10px;
  width: 98%;
  height: 20px;
  font-size: 20px;
  font-family: 'TTLaundryGothicB';
}

.question > textarea {
  width: 98%;
  margin-top: 10px;
  font-size: 20px;
  font-family: 'TTLaundryGothicB';
}

input[type='submit'] {
  background-color: rgb(185, 185, 252);
  height: 40px;
  width: 99%;
  color: white;
  font-size: 15px;
  font-family: 'TTLaundryGothicB';
  border-radius: 5px;
  border-color: rgb(112, 159, 199);
  margin-top: 20px;
}
</style>