<template>
  <div class="home">
    {{aa}}
    <button @click="handleLogin()">登录</button>
  </div>
  <div id="echartsBox" style="width: 600px;height:400px;"></div>
</template>

<script lang='ts'>
import * as echarts from 'echarts'
import { defineComponent, reactive, getCurrentInstance, onMounted } from 'vue'
import { LoginService } from '@/api/common'
export default defineComponent({
  name: 'Home',
  setup() {
    const instance = getCurrentInstance() as any;
    const state = reactive({
      Account: 'admin', //账户
      Password: 'hhhh', //密码
    })
    const handleLogin = async () => {
      const loginParams = {
        username: state.Account,
        password: state.Password,
      }
      const res = await LoginService.login(loginParams)
      console.log(res)
    }
    console.log(instance.appContext.config.globalProperties.$myStore.get('vuexUser.name'), '==============')
    // context.$myStore.set('vuexUser.name','456')
    onMounted(() => {
      let myChart = echarts.init(document.getElementById("echartsBox") as HTMLElement);
      // 绘制图表
      myChart.setOption({
        xAxis: {
          data: ["4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9"]
        },
        yAxis:{},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [8, 15, 31, 13, 15, 22, 11]
          }
        ]
      });
      window.onresize = function () { // 自适应大小
        myChart.resize();
      };
    })
    return {
      handleLogin,
      state
    }
  },
  data() {
    return {
      a: 111
    }
  },
  computed: {
    aa():any {
      return this.$myStore.get('vuexUser.name')
    }
  },
  mounted() {
    // console.log(vuexTestVar)s
    // console.log(this.state)
    // console.log((this as any).vuexTestVar)
    // console.log(this.vuexTestVar)
    // console.log(this.aa)
    this.$myStore.set('vuexUser.name','456')
    console.log(this.$myStore.get('vuexTestVar'))
    console.log(this.$myStore.get('vuexUser.name'))
    // console.log((this as any).vuexUser.name)
  },
  methods: {
  }
})
</script>
