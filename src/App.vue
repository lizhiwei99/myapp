<template>
  <div class="container">
    <h1>todolist</h1>
    <newtodoVue></newtodoVue>
    <todolist></todolist>
    <deletebuttonVue />
  </div>
</template>

<script setup lang="ts">
import todolist from './components/todolist.vue'
import deletebuttonVue from "./components/deletebutton.vue";
import newtodoVue from './components/newtodo.vue';
import { watch } from '@vue/runtime-core';
import { mainStore } from './store/index'
const store = mainStore()
watch(store.todolist,()=>{
  localStorage.setItem('todolist',JSON.stringify(store.todolist))
})
</script>

<style scoped lang="less">
.container {
  border: 1px solid rgb(141, 137, 137);
  width: 500px;
  background-color: lightblue;
  border-radius: 20px;
}
</style>