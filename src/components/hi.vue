<template>
  <input type="text" ref="inputref" v-model="textvalue">
  <button @click="sendText">发送</button>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'hi',
  setup() {
    let textvalue  = ref('')
    const inputref = ref<HTMLElement|null>(null)
    onMounted(()=>{
      console.log(inputref)
      inputref.value&&inputref.value.focus()
    })

    const sendText = ()=>{
        inputref.value&&inputref.value.focus()
        textvalue.value = ''
    }
    return {
      inputref,
      sendText,
      textvalue
    }
  }
}
</script>

<style>

</style>