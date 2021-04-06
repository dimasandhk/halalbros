<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
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
};
</script>

<style lang="scss"></style>
