<template>
    <input type="text" v-model="word">
    <router-link to="/person/persontwo">我是人</router-link>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const word = ref('')
</script>

<style scoped lang="less">

</style>