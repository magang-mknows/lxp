import { FC, ReactElement } from "react";
import { BiRefresh } from "react-icons/bi";
import Button from "../atoms/Button";
import LandingArticleCardThumb from "../atoms/LandingArticleCardThumb";
import LandingArticleContent from "../atoms/LandingArticleContent";
import LandingArticleTitle from "../atoms/LandingArticleTitle";

const LandingArticle: FC = (): ReactElement => {
  const dummyArticles = [
    {
      title: "Meningkatkan Output Perusahaan dengan Pelatihan Karyawan",
      text: "Pelatihan karyawan telah menjadi salah satu elemen penting dalam pengembangan organisasi dan peningkatan produktivitas perusahaan.",
    },
    {
      title: "Apa Guna Pelatihan Karyawan",
      text: "Pelatihan karyawan adalah proses pendidikan yang penting dalam setiap bisnis yang sukses. Ini adalah metode pendidikan yang dirancang.",
    },
    {
      title: "Maximizing Employee Effectivity: Tips for Achieving Success",
      text: "The success of a company relies heavily on the effectiveness of its employees. Employee effectivity refers to the ability of employees to perform their job  ",
    },
  ];

  return (
    <div className="px-8 md:px-14 lg:px-16 py-12 md:py-14 lg:py-16 xl:py-20 bg-neutral-100">
      <LandingArticleTitle />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mb-6 md:mb-8 lg:mb-10 xl:mb-14">
        {dummyArticles.map((article, index) => {
          return (
            <div key={index}>
              <LandingArticleCardThumb id={index + 1} />
              <LandingArticleContent desc={article.text} title={article.title} />
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center md:justify-start lg:justify-center">
        <Button
          icon={<BiRefresh className="text-lg" />}
          text="Lihat semua artikel"
          size="large"
          type="primary"
        />
      </div>
    </div>
  );
};

export default LandingArticle;
