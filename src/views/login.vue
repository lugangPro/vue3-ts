<template>
  <div class="login">
    <transition name="el-zoom-in-center">
      <div v-show="isShow" class="formBox" v-on:keyup.enter="loginIn">
        <el-input type="text" v-model="userName" placeholder="userName"></el-input>
        <el-input type="password" v-model="userPaw" placeholder="password"></el-input>
        <el-button type="primary" @click="loginIn">Login</el-button>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import loginHook from '@/hooks/loginHook';
export default defineComponent({
  name: 'Login',
  setup(){
    const { userName, userPaw, isShow, loginIn }  = loginHook();
    return {
      userName,
      userPaw,
      isShow,
      loginIn,
    }
  }
})
</script>
<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  background: url('~@/assets/img/login.png') no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .formBox{
    width: 300px;
    text-align: center;
    :deep .el-input{
      margin-bottom: 16px;
      .el-input__inner{
        border: 0;
        box-shadow: 2px 2px 7px 2px #fff;
        &:focus,&:hover{
          border-color: transparent; 
        }
      }
    }
  }
}
</style>