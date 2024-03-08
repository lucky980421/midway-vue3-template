import "./assets/main.css";
import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import * as AntIcons from '@ant-design/icons-vue'

app.use(router);
app.use(pinia);
app.use(Antd);
for (const [key, component] of Object.entries(AntIcons)) {
  app.component(key, component);
}
app.mount("#app");
