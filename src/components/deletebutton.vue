<template>
    <div class="foot">
        <input type="checkbox" v-model="allselect">
        <span>已完成{{ selectNub }}/全部{{ store.todolist.length }}</span>
        <button @click="deletetodo">删除</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'
import { mainStore } from '../store/index'
const store = mainStore()
//全选
const allselect = ref(false)
watch(allselect, () => {
    store.todolist.forEach((item) => {
        if (!allselect.value == item.isAct) {
            item.isAct = !item.isAct
        }
    })
})

watch(store.todolist,()=>{
    if(store.todolist.length==selectNub.value){
        allselect.value=true
    }else{
        allselect.value=false
    }
})


//计算属性：已完成数量
 const selectNub = computed(() => {
    let nub = 0
    store.todolist.forEach((item) => {
        if (item.isAct) {
            nub++
        }
    })
    return nub
})

//删除的回调
const deletetodo = () => {
   store.todolist =store.todolist.filter((item) => !item.isAct)
   localStorage.removeItem('todolist')
}
</script>

<style scoped lang="less">
.foot {
    background: red;
    display: flex;
    justify-items: center;
    align-content: space-between;
    height: 40px;
    line-height: 40px;

    span {
        flex: 1;
    }

    button {
        flex: .3;
    }

}
</style>