import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBalanceStore  = defineStore('balance', ()=> {
  const balances = ref([
    {
      name: '김하나',
      balance: 100000
    },
    {
      name: '김두리',
      balance: 10000
    },
    {
      name: '김서이',
      balance: 100
    },
      
  ]) 

  const findPersonInfo = function (name) {
    const personInfo = balances.value.find((person) => person.name === name)
    // console.log(personInfo)
    return personInfo
  }
  
  const increaseBalance = function (name) {
    balances.value.find((person) => person.name === name).balance += 1000
  }


  return { balances, findPersonInfo, increaseBalance }
})


