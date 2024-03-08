<template>
  <div class="layout-sider-container">
    <a-layout-sider v-bind="$attrs">
      <div class="logo" />
      <a-menu
        :selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @select="handleMenuSelect"
      >
        <a-menu-item v-for="item in menuList" :key="item.path">
          <user-outlined />
          <span>{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const selectedKeys = computed(() => {
  return [route.path];
});
const menuList = [
  {
    path: "/index",
    title: "菜单1",
    icon: "",
  },
  {
    path: "/index2",
    title: "菜单2",
    icon: "",
  },
];

function handleMenuSelect({ item, key, selectedKeys }) {
  router.push({ path: key });
}
</script>

<style scoped lang="scss">
.layout-sider-container {
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
