import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import './element-variables.scss'
import './assets/sass/common.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import store from './store'
import installMaxerStore, {Maxer} from './store/maxer.mixin'
import initStorePersistence from './store/store.persistence'

// 声明全局组件 防止需要this调用时不能识别类型
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $myStore: Maxer;  // 声明全局方法
    }
}

const app = createApp(App)
installMaxerStore(app) // 全局混入vuex
initStorePersistence(store) // 初始化持久化vuex
app.use(router).use(store).use(ElementPlus, { locale }).mount('#app')