<template>
  <div class="layout-content-container">
    <a-layout-content :style="{}">
      <router-view />
    </a-layout-content>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout-content-container {
  margin: 16px;
  padding: 24px;
  background: #fff;
  height: 100%;
}
</style>
