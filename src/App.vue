<template>
  <div class="container">
    <h1>todolist</h1>
    <button v-for="item in routes" @click="routerPush(item.path)">{{item.path}}</button>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.path" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.path" />
    </router-view>



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
import routerPush from './hooks/routerPush'
import { router, routes } from "./router"
const store = mainStore()
watch(store.todolist, () => {
  localStorage.setItem('todolist', JSON.stringify(store.todolist))
})
//页面跳转

</script>

<style scoped lang="less">
.container {
  border: 1px solid rgb(141, 137, 137);
  width: 500px;
  background-color: lightblue;
  border-radius: 20px;
  overflow: hidden;

}
</style>