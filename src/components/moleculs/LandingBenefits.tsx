import { FC, ReactElement } from "react";
import LandingBenefitsList from "../atoms/LandingBenefitsList";
import LandingBenefitsTitle from "../atoms/LandingBenefitsTitle";

const LandingBenefits: FC = (): ReactElement => {
  const dummyBenefits = [
    {
      title: "Online Learning",
      text: "Mulailah meningkatkan pengetahuan dan kemampuan Anda melalui fitur online learning kami yang menawarkan pengalaman belajar yang interaktif dan menyenangkan.",
    },
    {
      title: "E-Sertifikat",
      text: "Dapatkan pengakuan resmi atas kemampuan dan pengetahuan Anda melalui fitur E-sertifikat kami yang memberikan sertifikat berkualitas tinggi dan dapat diakses kapan saja, di mana saja.",
    },
    {
      title: "Gamifikasi",
      text: "Fitur gamifikasi adalah sebuah strategi yang mengadaptasi elemen permainan ke dalam konteks non-permainan untuk meningkatkan motivasi, keterlibatan, dan kesenangan pengguna.",
    },
    {
      title: "Konten Relevan",
      text: "Pelajari topik yang Anda butuhkan dengan fitur konten yang relevan dari kami, menyediakan materi terkini dan terverifikasi untuk membantu Anda mencapai tujuan belajar Anda.",
    },
  ];

  return (
    <div className="px-16 bg-neutral-100">
      <section className="px-16 rounded-lg bg-version2-400 grid grid-cols-3 gap-10 items-center">
        <LandingBenefitsTitle />
        <section className="col-span-2 grid grid-cols-2 gap-10 py-16">
          {dummyBenefits.map(({ text, title }, index) => {
            return <LandingBenefitsList desc={text} title={title} key={index} />;
          })}
        </section>
      </section>
    </div>
  );
};

export default LandingBenefits;
