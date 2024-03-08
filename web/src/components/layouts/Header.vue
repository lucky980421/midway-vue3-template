<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <div class="w-full flex justify-between items-center">
        <div class="ml-4">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            style="font-size: 18px"
            @click="switchCollapsed"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            style="font-size: 18px"
            @click="switchCollapsed"
          />
        </div>
        <div class="mr-4 flex items-center">
          <a-dropdown>
            <div class="flex items-center mr-4">
              <a-avatar size="small">{{ surname }}</a-avatar>
              <span class="ml-1">{{
                systemConfig.userInfo.nickName || "HelloWorld"
              }}</span>
            </div>
            <template #overlay>
              <a-menu>
                <!-- <a-menu-item>
                  <a href="javascript:;">简体中文</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">English</a>
                </a-menu-item> -->
                <!-- <a-menu-divider /> -->
                <a-menu-item>
                  <a href="javascript:;">退出登录</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <!-- <a-dropdown>
            <GlobalOutlined style="font-size: 18px" />
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="javascript:;">简体中文</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">English</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown> -->
        </div>
      </div>
    </a-layout-header>
  </div>
</template>

<script setup lang="ts">
import { GlobalOutlined } from "@ant-design/icons-vue";
import { systemConfig } from "@/domain/system";
import { computed } from "vue";

defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
  switchCollapsed: Function,
});

const surname = computed(() => {
  return "".substring(0, 1);
});
</script>

<style scoped lang="scss"></style>
