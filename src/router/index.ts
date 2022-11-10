import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

interface routename {
    label?:string
}

export const routes: RouteRecordRaw[] = [
    {
        path: '/person',
        component: () => import('../page/person.vue'),
        meta: {
            keepAlive: true, //设置页面是否需要使用缓存,
            detail:'人的相关信息'
        },
        redirect: '',
        children: [
            {
                path:'persontwo',
                redirect:'',
                component:() => import('../page/demo.vue'),
                children:[]
            }
        ]
    }, 
    {
        path: '/detail',
        component: () => import('../page/detail.vue'),
        redirect: '',
        children: [],
        meta: {
            keepAlive: true, //设置页面是否需要使用缓存
            detail:'详情'
        },
    }, 
    {
        path: '/message',
        component: () => import('../page/message.vue'),
        redirect: '',
        children: [],
        meta: {
            keepAlive: true, //设置页面是否需要使用缓存
            detail:'我的信息',
        },
    },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})


