<template>
    <div class="item" v-for="item, index in store.todolist" :key="index">
        <input type="checkbox" v-model="item.isAct" class="checkbox">
        <input v-show="!item.isShow" type="text" v-model="item.todo" @blur="changeTodo(index)" :ref="setDom">
        <span v-show='item.isShow' @click="showInput(index)">{{ item.todo }}</span>
        <button class="delete" @click="deletetodo(index)">删除</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { nextTick, onBeforeUpdate } from '@vue/runtime-core'
import { mainStore } from '../store'
const store = mainStore()

//删除todo
const deletetodo=(index:number)=>{
    confirm('删除')&&store.todolist.splice(index,1)
}

//获取dom 数组
const arr : HTMLElement[] = []
const todoDom = ref(arr)
const setDom =(el:HTMLElement)=>{
    todoDom.value.push(el)
    return undefined
}
//数据更新前将tododom清空 以免重复push
onBeforeUpdate(()=>{
    todoDom.value = []
})

//点击span的回调函数
const showInput = (index:number) => {
    store.todolist[index].isShow = false
    //直接写可能还未input框还未挂载
    // setTimeout(() => {
    //  todoDom.value[index].focus()   
    // }, );
    nextTick(()=>{
        todoDom.value[index].focus()
    })
}

//输入框失去焦点的回调函数
const changeTodo = (index:number) => {
    store.todolist[index].isShow = true
}
</script>

<style scoped lang="less">
.item {
    width: 80%;
    height: 30px;
    border: 2px solid;
    margin: 10px auto;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    position: relative;

    .checkbox{
        position: absolute;
        left: 10px;
        top: 5px;
    }

    .delete{
        height: 25px;
        font-size: 12px;
        position: absolute;
        right: 10px;
        top: 3px;
        display: none;
    }

    &:hover .delete{
        display: block;
    }
}
</style>