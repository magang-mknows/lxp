import { atom, selectorFamily } from "recoil";
import { videoGuideTypes } from "./type";
import VideoDummy from "/public/assets/guide/video-dummy.svg";
import { DictionaryType } from "./type";

export const videoGuideState = atom<Array<videoGuideTypes>>({
  key: "video-guide-state",
  default: [
    {
      videoId: "2PkWBWhHiwE",
      titleVideo: "Cara daftar studi",
      descVideo:
        "Video ini menjelaskan tentang cara melakukan Pendaftaran Kampus Gratis. Formulir Pendaftaran di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online. Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya sudah tidak diragukan lagi kehandalannya.",
      imgVideo: "",
    },
    {
      videoId: "mD6uSGSjgr4",
      titleVideo: "Panduan kalender",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: "",
    },
    {
      videoId: "LKATs6MDeCw",
      titleVideo: "tes",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: "",
    },
    {
      videoId: "MCVkMmYL-aY",
      titleVideo: "Panduan lupa password",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: VideoDummy,
    },
    {
      videoId: "71a2zeC71gk",
      titleVideo: "Cara melihat nilai",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: VideoDummy,
    },
    {
      videoId: "qzMPvbL3GRQ",
      titleVideo: "Cara melihat nilai",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: VideoDummy,
    },
  ],
});

export const filterOption = selectorFamily({
  key: "filter-option-subject",
  get:
    (query: string) =>
    ({ get }) =>
      get(videoGuideState).filter((item) => (item.videoId as string).includes(query)),
});

export const GuideDictionaryState = atom<Array<DictionaryType>>({
  key: "option-dictionary-state",
  default: [
    {
      id: "1",
      title: "Batch",
      description: "Batch merupakan angkatan dari program pelatihan yang sedang diikuti.",
      slug: "batch",
    },
    {
      id: "2",
      title: "Poin",
      description:
        "Nilai keseluruhan karyawan dari beban pelatihan yang ia ambil. Poin digunakan sebagai predikat kelulusan karyawan.",
      slug: "poin",
    },
    {
      id: "3",
      title: "Nilai",
      description: "Merupakan representasi hasil dari tes yang dilakukan yang berupa angka.",
      slug: "nilai",
    },
    {
      id: "4",
      title: "Program Pelatihan",
      description:
        "Kesatuan rencana belajar sebagai pedoman penyelenggaraan pendidikan akademik dan atau profesional atas dasar suatu kurikulum.",
      slug: "program-pelatihan",
    },
    {
      id: "5",
      title: "Huruf Index",
      description:
        "Adalah singkatan dari “Indeks Prestasi,” yang artinya sama seperti nilai akhir batch.",
      slug: "huruf-index",
    },
    {
      id: "6",
      title: "Mentor",
      description:
        "Tenaga pengajar yang memiliki tugas utama mengajar, membimbing, dan atau melatih karyawan.",
      slug: "mentor",
    },
  ],
});

//search
export const queryOptionDictionary = atom({
  key: "query-option-dictionary",
  default: "",
});

export const filterOptionDictionary = selectorFamily({
  key: "filter-option-dictionary",
  get:
    (query: string) =>
    ({ get }) =>
      get(GuideDictionaryState).filter((item) => (item.slug as unknown as string).includes(query)),
});
