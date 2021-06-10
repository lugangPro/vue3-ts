<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <Aside></Aside>
      <el-main>
        <!-- <Tabs></Tabs> -->
          <router-view v-slot="{ Component }">
            <transition name="breadcrumb">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Header from '@/components/header.vue';
import Aside from '@/components/aside.vue';
import Tabs from '@/components/tabs.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Aside,
    Tabs,
    Header
  },
  setup() {
  },
})
</script>
<style lang="scss" scoped>
  .el-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .el-header {
      width: 100%;
      background-color: #B3C0D1;
      line-height: 60px;
    }
    .el-main{
      background: #f8f8f8;
      padding: 16px;
      overflow: hidden;
      >div{
        width: 100%;
        height: 100%;
        background: #fff;
      }
    }
  }

  /* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(50px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: fixed;
}
</style>
