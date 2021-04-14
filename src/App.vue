<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./views/Home";
import About from "./views/About";

export default {
  data: () => ({
    currPage: "Home",
  }),
  components: {
    Home,
    About,
  },
  created() {
    AOS.init({
      once: true,
    });
  },
};
</script>

<style lang="scss"></style>
