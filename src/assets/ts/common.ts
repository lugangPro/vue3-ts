export function userInfo () {
  let userInfo:Record<string | number | symbol, any> = {};
  const info = window.sessionStorage.getItem('userInfo');
  if (info) {
    userInfo = JSON.parse(info);
  }
  return {
    ...userInfo
  }
}