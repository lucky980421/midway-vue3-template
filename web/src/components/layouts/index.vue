<template>
  <div class="layout-container">
    <a-layout>
      <Sider
        v-model:collapsed="collapsed"
        style="height: 100%"
        :trigger="null"
        collapsible
      ></Sider>
      <a-layout>
        <Header
          :collapsed="collapsed"
          :switchCollapsed="switchCollapsed"
        ></Header>
        <Content></Content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Content from "./Content.vue";
import Sider from "./Sider.vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);

function switchCollapsed() {
  collapsed.value = !collapsed.value;
}
</script>
<style lang="scss">
.layout-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .ant-layout {
    height: 100%;
  }
}
</style>
