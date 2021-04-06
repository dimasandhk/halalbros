import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Asmaul from "../views/Asmaul.vue";
import DoaHarian from "../views/DoaHarian.vue";
import Kisah from "../views/Kisah.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/asmaul", component: Asmaul },
  { path: "/doa-harian", component: DoaHarian },
  { path: "/kisah-nabi", component: Kisah },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
