<script setup>
import QuizView from './views/QuizView.vue';

</script>

<template>
  <div class="container">
    <header>
      <div class="title">
        Quiz 퀴즈
      </div>
      <div class="content">
        <p>여기는 퀴즈의 나라! 놀라운 퀴즈들이 기다리고 있어요. 지금 바로 도전해보세요!</p>
      </div>
    </header>
    <main>
      <QuizView />
    </main>  
  </div>

</template>

<style scoped>
* {
  font-family: 'TTLaundryGothicB';
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  width: 40%;
  border: 1px solid rgb(201, 181, 181);
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgb(190, 171, 171);
}
.title {
  background-color: orange;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px 10px 0 0;
  font-size: 30px;
}

header > .content {
  font-family: TTLaundryGothicB;
  font-size: 15px;
  text-align: center;
  padding: 10px 0;
}

@font-face {
    font-family: 'TTLaundryGothicB';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/TTLaundryGothicB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}


</style>
