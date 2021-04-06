<template>
  <section class="bacaan-sholat mt-5">
    <HeaderPage :msg="titlePage" />
    <div class="row mt-5">
      <div
        class="col-12 col-md-12 col-lg-12"
        v-for="{ id, nama, arab, latin, arti } of arrBacaan"
        :key="id"
      >
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">{{ nama }}</h5>
            <p class="card-text">
              {{ arab }}
            </p>
            <p class="card-text">
              {{ latin }}
            </p>
            <p class="card-text">
              {{ arti }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    titlePage: "👌 HalalBros - Bacaan Sholat",
    arrBacaan: [],
  }),
  created: async function () {
    const bacaan = await this.getBacaan();
    bacaan.forEach((el) => {
      this.arrBacaan.push({
        id: el.id,
        nama: el.name,
        arab: el.arabic,
        latin: el.latin,
        arti: el.terjemahan,
      });
    });
  },
  methods: {
    getBacaan() {
      return fetch("https://islamic-api-zhirrr.vercel.app/api/bacaanshalat")
        .then((res) => res.json())
        .then((res) => res);
    },
  },
};
</script>

<style lang="scss">
.bacaan-sholat {
  margin-bottom: 100px;
}
</style>
