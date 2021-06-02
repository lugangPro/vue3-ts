<template>
  <el-aside>
    <el-menu
      router
      unique-opened
      :default-active='defaultActive'
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="item in menuData" :key="item.id">
        <el-menu-item v-if="!item.children" :index="item.path">
          <template #title><i :class="item.icon"></i>{{item.name}}</template>
        </el-menu-item>
        <el-submenu v-else :index="item.path">
          <template #title><i :class="item.icon"></i>{{item.name}}</template>
          <template v-for="x in item.children" :key="x.id">
            <el-menu-item v-if="!x.children" :index="x.path">{{x.name}}</el-menu-item>
            <el-submenu v-else :index="x.path">
              <template #title>{{x.name}}</template>
              <el-menu-item v-for="p in x.children" :key="p.id" :index="p.path">{{p.name}}</el-menu-item>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'Aside',
  setup() {
    const menuData = ref([
      {
        name: '首页',
        id: '1',
        path: '/index',
        icon: 'el-icon-menu',
      }, {
        name: '菜单2',
        id: '2',
        path: '/index2',
        icon: 'el-icon-message',
        children: [
          {
            name: '菜单2-1',
            id: '201',
            path: '/index3',
          }, {
            name: '菜单2-2',
            id: '202',
            path: '/index4',
          }
        ]
      }, {
        name: '菜单3',
        id: '3',
        path: '/index5',
        icon: 'el-icon-data-analysis',
        children: [
          {
            name: '菜单3-1',
            id: '301',
            path: '/index6',
            children: [
              {
                name: '菜单3-1-1',
                id: '311',
                path: '/index7',
              }
            ]
          },{
            name: '菜单3-2',
            id: '301',
            path: '/index8'
          }
        ]
      }
    ]);
    const route = useRoute()
    const defaultActive = route.path;
    return {
      menuData,
      defaultActive
    }
  },
})
</script>
<style lang="scss" scoped>
.el-aside {
  width: 220px !important;
  height: 100%;
  background-color: #D3DCE6;
  color: #333;
  .el-menu{
    width: 100%;
    height: 100%;
  }
}
</style>
