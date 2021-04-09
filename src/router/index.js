import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Asmaul from "../views/Asmaul.vue";
import DoaHarian from "../views/DoaHarian.vue";
import Kisah from "../views/Kisah.vue";
import NiatSolat from "../views/NiatSolat.vue";
import BacaanSolat from "../views/BacaanSolat.vue";
import Alquran from "../views/Alquran.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/asmaul", component: Asmaul },
  { path: "/doa-harian", component: DoaHarian },
  { path: "/kisah-nabi", component: Kisah },
  { path: "/niat-sholat", component: NiatSolat },
  { path: "/bacaan-sholat", component: BacaanSolat },
  { path: "/alquran", component: Alquran },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
