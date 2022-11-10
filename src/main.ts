import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from './router'
//创建pinia 和 vue实例
const pinia = createPinia()
const app = createApp(App)
//挂载pinia
app.use(pinia)
app.use(router)
app.mount('#app')
