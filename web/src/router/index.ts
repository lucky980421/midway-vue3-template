import { createRouter, createWebHistory } from "vue-router";
import { abortAllPending } from "@/adapter/ajax";
import Layout from "../components/layouts/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/index",
      children: [
        {
          path: '/index',
          component: () => import('@/views/index/index.vue')
        },
        {
          path: '/index2',
          component: () => import('@/views/index2/index.vue')
        }
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/:w+',
      redirect: {
        path: '/index'
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 切换路由取消请求
  abortAllPending();
  next();
});

export default router;
