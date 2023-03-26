import { atom, selector } from "recoil";

export const UserSearchState = atom({
  key: "userSearchState",
  default: "",
});

export const FeaturesListState = atom({
  key: "FeaturesListState",
  default: [
    {
      title: "Administrasi",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/administrasi.svg",
    },
    {
      title: "Rencana Pelatihan",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/rencana-pelatihan.svg",
    },
    {
      title: "Pelatihan-ku",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/studiku.svg",
    },
    {
      title: "Nilai & sertifikat",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/nilaisertif.svg",
    },
    {
      title: "Penugasaan",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/penugasan.svg",
    },
    {
      title: "Ruang Diskusi",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/ruang-diskusi.svg",
    },
    {
      title: "Konsultasi & Layanan",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/konsultasilayanan.svg",
    },
    {
      title: "Simulasi, Drill & Assessmen",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/drill.svg",
    },
    {
      title: "Kalender Saya",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/kalendersaya.svg",
    },
    {
      title: "Panduan",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/panduan.svg",
    },
    {
      title: "Papan Skor",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/panduan.svg",
    },
    {
      title: "Sekilas Ilmu",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/sekilasilmu.svg",
    },
    {
      title: "Acara Unik",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: true,
      srcImg: "/assets/features/acaraunik.svg",
    },
    {
      title: "Post Training Project",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: false,
      srcImg: "/assets/features/penyalurankerja.svg",
    },
    {
      title: "Coaching dan Karir",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: false,
      srcImg: "/assets/features/perencanaankarir.svg",
    },
    {
      title: "Analitik",
      desc: "Isi administrasi kamu sekarang untuk dapat mengikuti program Kampus Gratis",
      isAvailable: false,
      srcImg: "/assets/features/Analitik.svg",
    },
  ],
});

export const FilteredFeatures = selector({
  key: "FilteredFeatures",
  get: ({ get }) =>
    get(FeaturesListState).filter((item) =>
      item.title.toLowerCase().includes(get(UserSearchState).toLowerCase()),
    ),
});
