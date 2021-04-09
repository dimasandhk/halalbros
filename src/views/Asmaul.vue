<template>
  <section class="asmaul mt-5">
    <HeaderPage :msg="titlePage" />
    <RowPage class="justify-content-center">
      <div
        class="col-12 col-md-6 col-lg-3"
        v-for="{ latin, id, arab, TID, TEN } in listAsmaulHusna"
        :key="id"
      >
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">{{ latin }} ({{ id }})</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ arab }}</h6>
            <p class="card-text">{{ TID }}</p>
            <p class="card-text">{{ TEN }}</p>
          </div>
        </div>
      </div>
    </RowPage>
  </section>
</template>

<script>
export default {
  data: () => ({
    titlePage: "👌 HalalBros - Asmaul Husna",
    listAsmaulHusna: [],
    urlAPI: "https://islamic-api-zhirrr.vercel.app/api/asmaulhusna", // Api by github.com/Zhirr
    errorMessage: "",
    loading: true,
  }),
  created: async function () {
    try {
      const data = await this.getDataList();
      data.forEach((list) => {
        this.listAsmaulHusna.push({
          id: list.index,
          latin: list.latin,
          arab: list.arabic,
          TID: list.translation_id,
          TEN: list.translation_en,
        });
      });
    } catch (err) {
      this.errorMessage = `${err}, maaf tampaknya server sedang down.`;
    }
  },
  methods: {
    getDataList() {
      return fetch(this.urlAPI)
        .then((res) => res.json())
        .then((res) => res.data);
    },
  },
};
</script>

<style lang="scss">
.asmaul {
  margin-bottom: 100px;
}
</style>
