//用于定义路由规则
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

//1.定义路由规则
const routes = [
    {
        path: '/tag',
        component: ()=>import('../views/jichushiyong')
    },
    {
        path: '/button',
        component: ()=>import('../views/button')//惰性导入button.vue
    },
    {
        path: '/card',
        component: ()=>import('../views/card')
    },
    {
        path: '/container',
        component: ()=>import('../views/container')
    },
    {
        path: '/menu',
        component: ()=>import('../views/menu')
    },
    {
        path: '/layout',
        component: ()=>import('../views/layout')
    },
    {
        path: '/form',
        component: ()=>import('../views/form')
    },
    {
        path: '/auth',
        component: ()=>import('../views/form_auth')
    },
    {
        path: '/upload',
        component: ()=>import('../views/upload')
    },
    {
        path: '/table',
        component:()=>import('../views/table')
    },
    {
        path: '/selection',
        component:()=>import('../views/selection单选')
    },
    {
        path: '/selectiondx',
        component:()=>import('../views/selection-多选')
    }
    ,
    {
        path: '/sortable',
        component:()=>import('../views/sortable')
    }
    ,
    {
        path: '/search',
        component:()=>import('../views/table_search')
    }
    ,
    {
        path: '/custom',
        component:()=>import('../views/custom_column')
    }
    ,
    {
        path: '/fenye',
        component:()=>import('../views/fenye')
    }
    ,
    {
        path: '/alert',
        component:()=>import('../views/alert')
    }
    ,
    {
        path: '/dialog',
        component:()=>import('../views/dialog对话框')
    }
    ,
    {
        path: '/popconfirm',
        component:()=>import('../views/确认弹出框')
    }
]

//2.初始化路由实例
const router = createRouter({//创建路由实例并传递上面路由对象 routes
   history: createWebHistory(),//模式
    //history: createWebHashHistory(),
    routes
})

export default router  //暴露路由