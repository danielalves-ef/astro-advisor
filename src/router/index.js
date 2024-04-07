// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/LayoutDefault.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
      {
        path: 'events/create',
        name: 'Create',
        meta: {
          requiresAuth: false
        },
        component: () => import(/* webpackChunkName: "event-create" */ '@/views/event/EventCreate.vue'),
      },
      {
        path: 'events',
        name: 'EventList',
        component: () => import(/* webpackChunkName: "event-list" */ '@/views/event/EventList.vue'),
      },
      {
        path: "login",
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
      },
      {
        path: "register",
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
      }
    ],
  },
  {
    path: '/pro',
    component: () => import('@/layouts/pro/LayoutPro.vue'),
    children: [
      {
        path: 'events/create',
        name: 'Create',
        meta: {
          requiresAuth: false
        },
        component: () => import(/* webpackChunkName: "pro-event-create" */ '@/views/event/EventCreate.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/LayoutAdmin.vue'),
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    },
    children: [
      {
        path: 'users',
        name: 'Admin-Users',

        component: () => import(/* webpackChunkName: "admin-users" */ '@/views/admin/AdminUsers.vue'),
      },
      {
        path: 'config/event',
        name: 'Events-Config',

        component: () => import(/* webpackChunkName: "events-config" */ '@/views/admin/EventsConfig.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach(async (to, from, next) => {
//   console.log("beforeEach")
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const auth = useAuthStore();
//   const token = await auth.getUserClaims();
//   console.log({ token })
//   console.log({ requiresAuth })
//   if (!requiresAuth) {
//     next();
//     return
//   }
//   console.log("before useAuthStore")
//   console.log({ auth })
//   const user = await auth.getCurrentUser();
//   console.log({ user })
//   if (!user) { next({ name: "Login" }); return; }
//   next();
// })

export default router
