<template>
    <div class="foot">
        <span >0/4已完成</span>
        <button>删除</button>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.foot{
    background: red;
    display: flex;
    justify-items: center;
    align-content: space-between;
    height: 40px;
    line-height: 40px;
 span{
    flex: 1;
 }

 button{
    flex: .3;
 }

}
</style>