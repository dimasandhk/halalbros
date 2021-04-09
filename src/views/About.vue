<template>
  <section class="about">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-6">
        <h3 class="text-center">🚀 About & Credit</h3>
      </div>
    </div>

    <div class="row justify-content-center mt-4">
      <div class="col-12 col-md-10 col-lg-6">
        <h6
          class="text-center text-muted"
          v-for="({ msg }, i) of credit"
          :key="i"
        >
          {{ msg }}
        </h6>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    credit: [
      { msg: "Made by Dimas Andhika Diputra" },
      { msg: "Api by github.com/Zhirr (71%)" },
      { msg: "Api by github.com/bachors (Al Quran)" },
      { msg: "Api by github.com/lakuapik (Jadwal)" },
    ],
  }),
};
</script>

<style lang="scss"></style>
