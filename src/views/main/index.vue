<template>
  <div>
    {{token}},{{role}},{{name}}
    <div>
      <el-button type="primary" @click="loginOut">out</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { userInfo } from '@/assets/ts/common';
import loginHook from '@/hooks/loginHook';
export default defineComponent({
  name: "Main",
  setup() {
    const { token, role, name }  = userInfo();
    const { loginOut }  = loginHook();
    return {
      name,
      token,
      role,
      loginOut
    }
  },
});
</script>
<style lang="sass" scoped>
</style>
