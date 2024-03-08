<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enUS from "ant-design-vue/es/locale/en_US";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
const locale = zhCN;
</script>
<template>
  <a-config-provider
    :locale="locale"
    component-size="large"
    :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }"
  >
    <a-style-provider hash-priority="high">
      <a-watermark content="">
        <router-view />
      </a-watermark>
    </a-style-provider>
  </a-config-provider>
</template>
