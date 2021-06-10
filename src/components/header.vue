<template>
  <div class="headerBox">
    <div class="logo">xxxxxxxxxxxx</div>
    <div class="userInfo">
      <el-dropdown>
        <i class="el-icon-s-custom"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{name}}</el-dropdown-item>
            <el-dropdown-item divided>消息(99)</el-dropdown-item>
            <el-dropdown-item>切换角色</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <i class="el-icon-warning" @click="loginOut"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { userInfo } from '@/assets/ts/common';
import loginHook from '@/hooks/loginHook';
export default defineComponent({
  name: 'Header',
  setup() {
    const { role, name }  = userInfo();
    const { loginOut }  = loginHook();
    return {
      name,
      role,
      loginOut
    }
  },
})
</script>

<style lang="scss" scoped>
.headerBox{
  display: flex;
  justify-content: space-between;
  .userInfo{
    i{
      font-size: 22px;
      color: teal;
      margin: 0 12px;
      cursor: pointer;
    }
  }
}
</style>