import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/_global.scss";
import router from "./router/index.js";
import HeaderPage from "./assets/components/HeaderPage";
import RowPage from "./assets/components/Row";
/* eslint-disable */

createApp(App)
  .use(router)
  .component("HeaderPage", HeaderPage)
  .component("RowPage", RowPage)
  .mount("#app");
