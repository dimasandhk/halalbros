<template>
  <section class="kisah mt-5">
    <h3 class="text-center">{{ titleJudul }}</h3>
    <HomeButton />
    <div class="row mt-5">
      <div
        class="col-12 col-md-6 col-lg-3"
        v-for="{ nama, id, tempat, tahun, usia } of arrKisah"
        :key="id"
      >
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">{{ nama }} ({{ id + 1 }})</h5>
            <h6 class="card-subtitle text-muted">{{ tempat }}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Tahun Lahir: {{ tahun }}</li>
            <li class="list-group-item">Usia: {{ usia }} Tahun</li>
          </ul>
          <div class="card-body">
            <button class="btn btn-outline-secondary btn-block shadow-none">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    titleJudul: "👌 HalalBros - Kisah Nabi",
    arrKisah: [],
  }),
  created: async function () {
    const data = await this.getDataKisah();
    data.forEach((list, i) => {
      this.arrKisah.push({
        id: i,
        nama: list.name,
        tahun: list.thn_kelahiran,
        tempat: list.tmp,
        gambar: list.image_url,
        usia: list.usia,
      });
    });
  },
  methods: {
    getDataKisah() {
      return fetch("https://islamic-api-zhirrr.vercel.app/api/kisahnabi")
        .then((res) => res.json())
        .then((res) => res);
    },
  },
};
</script>

<style lang="scss">
.kisah {
  margin-bottom: 100px;
}
</style>
