<template>
    <input type="text" v-model="keyword" @keydown.enter="addtodo" placeholder="请输入需要添加的待办事宜">
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { mainStore} from '../store'
const store = mainStore()
const keyword=ref('')
const addtodo=()=>{
    store.todolist.push({
        todo:keyword.value,
        isAct:false,
        isShow:true
    })
    //置空关键词
    keyword.value = ''
}
</script>

<style scoped lang="less">
input{
    width: 60%;
}
</style>