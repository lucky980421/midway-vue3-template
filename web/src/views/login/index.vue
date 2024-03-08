<template>
  <div class="login-container flex items-center justify-center">
    <div class="login-container__form-box">
      <a-form layout="vertical">
        <a-form-item v-bind="validateInfos.username">
          <a-input
            v-model:value="formState.username"
            placeholder="请输入手机号"
          />
        </a-form-item>

        <a-form-item v-bind="validateInfos.password">
          <a-input-password
            v-model:value="formState.password"
            placeholder="请输入密码"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.code">
          <div class="flex">
            <a-input
              placeholder="请输入验证码"
              v-model:value="formState.code"
            />
            <img
              @click="getCaptchaImage"
              class="ml-4"
              :src="captchaData.imageBase64"
            />
          </div>
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" type="primary" block @click="handleLogin"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, toRaw } from "vue";
import { Form } from "ant-design-vue";
import { request } from "@/adapter/ajax";
import { notification } from "ant-design-vue";
import { useRouter } from "vue-router";
import { Rule } from "ant-design-vue/es/form";
const router = useRouter();
const useForm = Form.useForm;

const captchaData = ref<{ id?: number; imageBase64?: string }>({});
const formState = reactive({
  password: "",
  username: "",
  code: "",
});
const rules = reactive<Record<string, Rule[]>>({
  password: [
    {
      required: true,
      message: "密码不能为空!",
      trigger: "change",
    },
  ],
  username: [
    {
      required: true,
      message: "手机号不能为空!",
      trigger: "change",
    },
  ],
  code: [
    {
      required: true,
      message: "验证码不能为空!",
      trigger: "change",
    },
  ],
});
const { resetFields, validate, validateInfos } = useForm(formState, rules, {
  onValidate: (...args) => console.log(...args),
});
onMounted(() => {
  getCaptchaImage();
});

function getCaptchaImage() {
  request({
    url: "/api/get-image-captcha",
    method: "GET",
  }).then((res) => {
    captchaData.value = res;
  });
}

function handleLogin() {
  validate().then(async () => {
    try {
      await request({ url: "/api/login", method: "POST" });
      notification.success({ message: "提示", description: "登录成功" });
      router.replace("/index");
    } catch (error) {
      resetFields();
      notification.error({ message: "提示", description: "登录失败" });
    }
  });
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &__form-box {
    width: 400px;
    border: 1px solid #eee;
    box-shadow: 0 10px 20px rgba(128, 128, 128, 0.2),
      0 6px 6px rgba(128, 128, 128, 0.2);
    box-sizing: border-box;
    padding: 24px;
  }
}
</style>
