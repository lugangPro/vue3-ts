<template>
  <el-tabs v-model="tabsDataValue" type="card" closable @tab-remove="removeTab">
    <el-tab-pane
      v-for="(item, index) in tabsData"
      :key="item.name + index"
      :label="item.title"
      :name="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Tabs",
  setup() {
    let tabIndex = 2;
    let tabsDataValue = ref("1");
    let tabsData = ref([
      {
        title: "首页",
        name: "1",
        content: "Tab 1 content",
      },
      {
        title: "首页2",
        name: "2",
        content: "Tab 2 content",
      },
    ]);
    const addTab = (targetName: string): void => {
      console.log(targetName)
      let newTabName = ++tabIndex + '';
      tabsData.value.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      tabsDataValue.value = newTabName;
    };
    const removeTab = (targetName: string): void => {
      let tabs = tabsData;
      let activeName = tabsDataValue.value;
      console.log(targetName, activeName)
      if (activeName == targetName) {
        tabs.value.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs.value[index + 1] || tabs.value[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      tabsData.value = tabs.value.filter((tab) => tab.name !== targetName);
    };
    return {
      tabsDataValue,
      tabsData,
      addTab,
      removeTab,
    };
  },
});
</script>
<style lang="sass" scoped>
</style>
