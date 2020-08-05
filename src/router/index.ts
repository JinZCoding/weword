import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";

const Index = () => import("../views/index.vue");
const Home = () => import("../views/home/index.vue");

const About = () => import("../views/about/index.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    redirect: "/home",
    component: Index,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        component: About
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
