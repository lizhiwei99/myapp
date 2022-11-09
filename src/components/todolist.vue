<template>
    <div class="item" v-for="item, index in store.todolist" :key="index" :ref="setDom">
        <input type="checkbox" v-model="item.isAct">
        <input v-show="!item.isShow" type="text" v-model="item.todo" @blur="changeTodo(index)" >
        <span v-show='item.isShow' @click="showInput(index)">{{ item.todo }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { mainStore } from '../store'
const store = mainStore()

//获取dom 数组
const todoDom = ref([])
const setDom =(el)=>{
    todoDom.value.push(el)
}

//点击span的回调函数
const showInput = (index:number) => {
    store.todolist[index].isShow = false
    todoDom.value[index].focus()
}

//输入框失去焦点的回调函数
const changeTodo = (index:number) => {
    store.todolist[index].isShow = true
}
</script>

<style scoped>
.item {
    width: 80%;
    height: 30px;
    border: 2px solid;
    margin: 10px auto;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
}
</style>