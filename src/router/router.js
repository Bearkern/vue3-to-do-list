import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/:nickname',
        component: () => import('../views/ToDoList.vue'),
      },
      {
        path: 'signIn',
        component: () => import('../views/SignIn.vue'),
      },
      {
        path: 'signUp',
        component: () => import('../views/SignUp.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
