import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import haveRoleGuard from "./role-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    // Eager loading: carga todo al inicio
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    component: import(/* webpackChunkName: "aboutView" */ "../views/ProfileView.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/*webpackChunkName: detail*/ "../views/DetailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      const userRole = localStorage.getItem("userRole");
      return isNaN(id) ? { id: null, userRole } : { id, userRole };
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: import(/*webpackChunkName: notFound*/ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
