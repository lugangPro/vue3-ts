<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <Aside></Aside>
      <el-main>
        <!-- <Tabs></Tabs> -->
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Aside from '@/components/aside.vue';
import Tabs from '@/components/tabs.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Aside,
    Tabs
  },
  setup() {
  },
})
</script>
<style lang="scss" scoped>
  .el-container{
    width: 100%;
    height: 100%;
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
  }
</style>
