import FeaturesModule from "@/modules/features/loading";
import { NextPage } from "next";
import { ReactElement } from "react";

export const metadata = {
  title: "Fitur | LXP App",
  description:
    "LXP dilengkapi fitur Administrasi, Rencana Pelatihan,Pelatihan-ku, Nilai & sertifikat, Penugasaan, Ruang Diskusi, Konsultasi & Layanan, Simulasi, Drill & Assessmen, Kalender Saya, Panduan, Papan Skor, Sekilas Ilmu, Acara Unik, Post Training Project, Coaching dan Karir, Analitik ",
};

const Features: NextPage = (): ReactElement => {
  return <FeaturesModule />;
};

export default Features;
