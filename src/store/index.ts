import { defineStore } from "pinia";
export const mainStore = defineStore('main',{
    state:()=>{
        return{
            item:'你好 我是pinia这边来的'
        }
    },
    getters:{},
    actions:{}
})