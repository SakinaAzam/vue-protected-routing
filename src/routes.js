import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'


const routes = [
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "Profile",
    component: Profile,
    path: "/profile",
    meta: {
      needsAuth:true,
    },
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (JSON.parse(localStorage.getItem("user"))) {
    next();
    localStorage.setItem("user", JSON.stringify(false));
  }
  if (to.meta.needsAuth) {
    next('/login')
  }
  else {
    next();
  }
  });

export default router;