<template>
  <div>
    <p>{{ myMsg }}</p>
    <p>{{ dynamic }}</p>
    <ParentGrandChild :my-msg="myMsg" @change-name="changeName"/>
    <button @click="$emit('someEvent')">송신!</button>
    <button @click="buttonClick">버튼</button>
    <button @click="emitArgs">버튼!!!!!!!!</button>
  </div>
</template>

<script setup>
import ParentGrandChild from '@/components/ParentGrandChild.vue'

defineProps({
  myMsg: [String, Boolean],
  dynamic: String,
})

const emit = defineEmits(['myFocus', 'emitArgs', 'changeName'])

const buttonClick = function() {
  emit('myFocus')
}

const emitArgs = function() {
  emit('emitArgs', 1, 2, 3)
}

const changeName = function(name) {
  emit('changeName', name)
}
</script>

<style scoped>

</style>