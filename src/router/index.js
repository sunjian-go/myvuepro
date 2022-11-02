//用于定义路由规则
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import jichushiyong from '../views/jichushiyong';

//1.定义路由规则
const routes = [
    {
        path: '/tag',
        component: jichushiyong,
        //component: () => import('@/views/jichushiyong'),
    },
    {
        path: '/button',
        component: ()=>import('../views/button')//惰性导入button.vue
    },
    {
        path: '/card',
        component: ()=>import('../views/card')
    }
]

//2.初始化路由实例
const router = createRouter({//创建路由实例并传递上面路由对象 routes
   history: createWebHistory(),//模式
    //history: createWebHashHistory(),
    routes
})

export default router  //暴露路由