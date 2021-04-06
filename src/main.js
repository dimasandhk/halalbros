import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/_global.scss";
import Button from "./assets/components/Button.vue";
import router from "./router/index.js";
import HomeButton from "./assets/components/ButtonHome.vue";
/* eslint-disable */

createApp(App)
  .use(router)
  .component("Button", Button)
  .component("HomeButton", HomeButton)
  .mount("#app");
