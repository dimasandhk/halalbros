<template>
  <section class="kisah mt-5">
    <HeaderPage :msg="titlePage" />
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
            <button
              class="btn btn-outline-secondary btn-block shadow-none"
              data-toggle="modal"
              data-target="#modalKisah"
              @click="changeActive(id)"
            >
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalKisah"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="targetModal">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p id="targetKisah">tes</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary shadow-none"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    titlePage: "👌 HalalBros - Kisah Nabi",
    arrKisah: [],
  }),

  created: async function () {
    const data = await this.getDataKisah(); // Ambil data dari api
    data.forEach((list, i) => {
      // Data apinya saya push ke Variabel arrKisah
      this.arrKisah.push({
        id: i,
        nama: list.name,
        tahun: list.thn_kelahiran,
        tempat: list.tmp,
        gambar: list.image_url,
        usia: list.usia,
        kisah: list.description,
      });
    });
  },

  methods: {
    getDataKisah() {
      return fetch("https://islamic-api-zhirrr.vercel.app/api/kisahnabi")
        .then((res) => res.json())
        .then((res) => res);
    },
    changeActive(index) {
      const obj = this.unProxyObject(this.arrKisah[index]);
      const kisah = obj.kisah.replace(/(?:\r\n|\r|\n)/g, "<br>");
      const title = obj.nama;
      this.updateModal(kisah, title);
    },
    updateModal(kisah, title) {
      document.getElementById("targetKisah").innerHTML = kisah;
      document.getElementById("targetModal").innerHTML = title;
    },
    unProxyObject(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
  },
};
</script>

<style lang="scss">
.kisah {
  margin-bottom: 100px;
}
</style>
