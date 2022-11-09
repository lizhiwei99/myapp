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
</script>

<style scoped lang="less">
.container {
  border: 1px solid rgb(141, 137, 137);
  width: 500px;
  background-color: lightblue;
  border-radius: 20px;
}
</style>