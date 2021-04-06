<template>
  <section class="niat-sholat mt-5">
    <HeaderPage :msg="titlePage" />
    <div class="row mt-5 justify-content-center">
      <div
        class="col-12 col-md-12 col-lg-6"
        v-for="{ id, nama, arab, latin, arti } of arrObject"
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
    titlePage: "👌 HalalBros - Niat Sholat",
    arrObject: [],
  }),
  created: async function () {
    const niat = await this.getNiatSholat();
    niat.forEach((el) => {
      this.arrObject.push({
        id: el.id,
        nama: el.name,
        arab: el.arabic,
        latin: el.latin,
        arti: el.terjemahan,
      });
    });
  },
  methods: {
    getNiatSholat() {
      return fetch("https://islamic-api-zhirrr.vercel.app/api/niatshalat")
        .then((res) => res.json())
        .then((res) => res);
    },
  },
};
</script>

<style lang="scss">
.niat-sholat {
  margin-bottom: 100px;
}
</style>
