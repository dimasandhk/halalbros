<template>
  <h3 class="text-center">{{ msg }}</h3>
  <HomeButton />
</template>

<script>
import HomeButton from "./ButtonHome";
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  components: {
    HomeButton,
  },
};
</script>

<style lang="scss" scoped></style>
