<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'APP'
})
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
