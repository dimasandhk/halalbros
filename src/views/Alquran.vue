<template>
  <section class="alquran mt-5">
    <HeaderPage :msg="titlePage" />
    <RowPage>
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="({ id, nama, arti, asma, ayat }, i) of arrSurat"
        :key="i"
      >
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">{{ nama }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Surat Ke {{ id }}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Arti: {{ arti }}</li>
            <li class="list-group-item">Asma: {{ asma }}</li>
            <li class="list-group-item">Jumlah: {{ ayat }} ayat</li>
          </ul>
          <div class="card-body">
            <button
              class="btn btn-secondary shadow-none btn-block btn-baca"
              data-toggle="modal"
              data-target="#modalAyat"
              @click="editModalBox(i)"
            >
              Baca
            </button>
            <button
              class="btn btn-secondary shadow-none btn-block btn-dengarkan"
              @click="getAudio(i)"
            >
              Dengarkan
            </button>
            <button
              class="btn btn-danger shadow-none btn-block btn-stop d-none"
              @click="stopAudio(i)"
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </RowPage>
  </section>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalAyat"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">👌 HalalBros</h5>
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
          <div class="container text-center">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="spinner-border text-secondary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
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
    titlePage: "👌 HalalBros - Alquran",
    urlAPI: "https://al-quran-8d642.firebaseio.com/data.json?print=pretty",
    arrSurat: [],
    arrAyat: [],
    currAudio: undefined,
  }),
  created: async function () {
    const surat = await this.getListSurat();
    surat.forEach((arr) => {
      this.arrSurat.push({
        id: arr.nomor,
        nama: arr.nama,
        arti: arr.arti,
        asma: arr.asma,
        ayat: arr.ayat,
        audio: arr.audio,
      });
    });
  },
  methods: {
    editModalBox: async function (index) {
      // Ketika tombol baca diklik
      const data = await this.getDataSurat(index); // Ambil data dari api
      let isi = "";
      data.forEach((el) => {
        isi += /*html*/ `
          <div class="col-12 col-md-12 col-lg-12">
            <div class="card mt-2">
              <div class="card-body">
                <h5 class="card-title">${el.ar}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Ayat ${el.nomor}</h6>
                <p class="card-text">${el.tr}</p>
                <p class="card-text">Arti: ${el.id}</p>
              </div>
            </div>
          </div>
        `;
      });
      document.querySelector(".modal-body").innerHTML = isi;
    },
    updateIsiModalBox() {},
    getDataSurat(i) {
      return fetch(
        `https://al-quran-8d642.firebaseio.com/surat/${i + 1}.json?print=pretty`
      )
        .then((res) => res.json())
        .then((res) => res);
    },
    getListSurat() {
      return fetch(this.urlAPI)
        .then((res) => res.json())
        .then((res) => res);
    },
    stopAudio(i) {
      const allBtnDengarkan = document.querySelectorAll(".btn-dengarkan");
      const allBtnStop = document.querySelectorAll(".btn-stop");
      this.pauseNResetAudio();
      this.afterAudioStopped([...allBtnDengarkan], [...allBtnStop], i);
    },
    pauseNResetAudio() {
      this.currAudio.pause();
      this.currAudio.currentTime = 0;
    },
    afterAudioStopped(ndListPlay, ndListStop, i) {
      ndListPlay[i].classList.toggle("d-none");
      ndListStop[i].classList.toggle("d-none");
      this.activingButton();
    },
    activingButton() {
      let btnNotActive = document.querySelectorAll(".btn-dengarkan");
      let btnBaca = document.querySelectorAll(".btn-baca");
      btnBaca = [...btnBaca];
      btnNotActive = [...btnNotActive];
      btnNotActive.forEach((btnA) => {
        btnA.disabled = false;
      });
      btnBaca.forEach((btnB) => {
        btnB.disabled = false;
      });
    },
    getAudio(i) {
      const allBtnDengarkan = document.querySelectorAll(".btn-dengarkan");
      const allBtnStop = document.querySelectorAll(".btn-stop");
      this.playAudio(i);
      this.afterAudioPlayed([...allBtnDengarkan], [...allBtnStop], i);
    },
    afterAudioPlayed(ndListPlay, ndListStop, i) {
      this.changeUIButton(ndListPlay, ndListStop, i);
      this.disablingButton();
    },
    changeUIButton(nodelistPlay, nodeListStop, i) {
      nodelistPlay[i].classList.toggle("d-none");
      nodeListStop[i].classList.toggle("d-none");
    },
    disablingButton() {
      let btnNotActive = document.querySelectorAll(".btn-dengarkan");
      let btnBaca = document.querySelectorAll(".btn-baca");
      btnBaca = [...btnBaca];
      btnNotActive = [...btnNotActive];
      btnNotActive.forEach((btnA) => {
        btnA.disabled = true;
      });
      btnBaca.forEach((btnB) => {
        btnB.disabled = true;
      });
    },
    playAudio(i) {
      const audio = new Audio(this.arrSurat[i].audio);
      this.currAudio = audio;
      audio.play();
    },
  },
};
</script>

<style lang="scss">
.alquran {
  margin-bottom: 100px;
}
</style>
