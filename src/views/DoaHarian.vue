<template>
  <section class="doa-harian mt-5">
    <HeaderPage :msg="titlePage" />
    <RowPage>
      <div
        class="col-12 col-md-12 col-lg-12"
        v-for="{ title, arab, latin, arti, id } of arrDoaHarian"
        :key="id"
      >
        <div
          class="card mt-3"
          data-aos-duration="700"
          :data-aos="id % 2 == 0 ? 'fade-right' : 'fade-left'"
        >
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
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
    </RowPage>
  </section>
</template>

<script>
export default {
  data: () => ({
    titlePage: "👌 HalalBros - Doa Harian",
    arrDoaHarian: [],
  }),
  created: async function () {
    const list = await this.getDataDoa();
    const doa = list.data;
    doa.forEach((isi, i) => {
      this.arrDoaHarian.push({
        id: i,
        title: isi.title,
        arab: isi.arabic,
        latin: isi.latin,
        arti: isi.translation,
      });
    });
  },
  methods: {
    getDataDoa() {
      return fetch("https://islamic-api-zhirrr.vercel.app/api/doaharian")
        .then((res) => res.json())
        .then((res) => res);
    },
  },
};
</script>

<style lang="scss">
.doa-harian {
  margin-bottom: 100px;
}
</style>
