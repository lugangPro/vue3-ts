 import {mapState} from "vuex";
 import store from '@/store'
 import {App} from 'vue'
 
 // 将定义的state变量key全部加载到全局变量中
 const $mStoreKey = store.state ? Object.keys(store.state) : [];
 export class Maxer{
     set = (name: string, value: any): void=>{
         store.commit('$changeStore', {
            name, value
         })
     }
     get = (name: string): void=>{
        const nameArr:any = name.split('.');
        const len:number = nameArr.length;
        let stateValue:void
        if (len >= 2) {
            let obj = store.state[nameArr[0]];
            for (let i = 1; i < len - 1; i++) {
                obj = obj[nameArr[i]];
            }
            stateValue = obj[nameArr[len - 1]];
        } else {
            stateValue = store.state[name];
        }
        return stateValue
    }
 }
 
 export default<T> (app: App<T>) => {
     // this.$m.set('user.name','x')
     // this.$m.get('name')
     app.config.globalProperties.$myStore = new Maxer();
 }