import { createStore } from 'vuex'

export default createStore({
    state: {
        vuexIsLogin: false,        // 当前的登录状态
        vuexTestVar: "这是vuex全局混入的测试变量",
        vuexUser: {
            test: 1,
            name: "测试名字"
        }
    },
    mutations: {
        $changeStore(state: any, payload: any) {
            // 判断是否为多层级调用，state中为对象存在的情况，诸如user.info.name = 'xxx'
            const nameArr = payload.name.split('.');
            const len = nameArr.length;
            if (len >= 2) {

                let obj = state[nameArr[0]];
                for (let i = 1; i < len - 1; i++) {
                    obj = obj[nameArr[i]];
                }
                obj[nameArr[len - 1]] = payload.value;
            } else {
                state[payload.name] = payload.value;
            }
        }
    }
})