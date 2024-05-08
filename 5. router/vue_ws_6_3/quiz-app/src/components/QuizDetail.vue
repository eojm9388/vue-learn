<template>
  <div>
    <div class="container">
      <div class="question">
        {{ pk }}번 문제. {{ question }}
      </div>
      <div class="answer">
        <label for="">정답 입력</label>
        <input type="text">
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  quiz: Object
})

const pk = props.quiz.pk
const question = props.quiz.question
const answer = props.quiz.answer

</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin-top: 30px;
  padding: 13px;

  border: 1px solid rgb(195, 195, 236);
  border-radius: 10px;
  background-color: aliceblue;

  position: relative;
}
.answer {
  margin-top: 20px;
  bottom: 10px;
}
.answer > label {
  display: block;
}
.answer > input {
  display: block;
  margin: 10px auto 0 auto;
  border-radius: 5px;
  width: 98%;
  height: 20px;
  font-size: 20px;
  font-family: 'TTLaundryGothicB';
}

</style>