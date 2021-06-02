import { ref,Ref,onMounted } from "vue";
import { useRouter } from 'vue-router';
import { ElMessage } from "element-plus"
export default function loginHook () {
  // 登录前信息
  const userName:Ref<string> = ref('admin');
  const userPaw:Ref<string> = ref('123456');
  const isShow:Ref<boolean> = ref(false);

  // 登录后信息
  const router = useRouter();


  //登录
  const loginIn = () => {
    if (!userName.value) {
      ElMessage.error('用户名不能为空');
      return false;
    }
    if (!userPaw.value) {
      ElMessage.error('密码不能为空');
      return false;
    }
    const userInfo = {
      name: userName.value,
      id: '1234',
      token: '1234',
      age: '23',
      role: '司令员',
    }
    const token = userInfo.token;
    // 浏览器存一份
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    router.push('/home');
  }
  //退出登录
  const loginOut = () => {
    console.log('退出成功')
    isShow.value = true;
    // 删除存储信息
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('userInfo');
    router.push('/');
  }

  onMounted(() => {
    setTimeout(() => {
      isShow.value = !isShow.value; 
    }, 500)
  })
  return {
    userName,
    userPaw,
    isShow,
    loginIn,
    loginOut
  }
}