import { defineStore } from "pinia";

interface state{
    todolist:todolist[]
}

interface todolist {
    todo:string,
    isAct:boolean,
    isShow:boolean
}

export const mainStore = defineStore('main',{
    state:():state=>{
        return{
            todolist: JSON.parse(localStorage.getItem('todolist') as string) ||[]
        }
    },
    getters:{},
    actions:{}
})