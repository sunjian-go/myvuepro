import { createApp } from 'vue'//<!--总入口-->
import App from './App.vue'
//导入element-plus组件以及css文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'  //导入路由组件
import * as ELIcon from '@element-plus/icons-vue'//导入element图标

const app = createApp(App)

//将element图标导入到app实例中
for(let iconName in ELIcon){
    app.component(iconName,ELIcon[iconName])
}

app.use(ElementPlus)//将element-plus引用到app实例中
app.use(router)//使用路由组件
app.mount('#app')
