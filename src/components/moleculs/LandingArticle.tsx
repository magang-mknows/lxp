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
    <div className="px-16 py-24">
      <LandingArticleTitle />
      <div className="grid grid-cols-3 gap-10 mb-28">
        {dummyArticles.map((article, index) => {
          return (
            <div>
              <LandingArticleCardThumb id={index + 1} />
              <LandingArticleContent desc={article.text} title={article.title} />
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          icon={<BiRefresh className="text-lg" />}
          text="Lihat semua artikel"
          size="w-[200px]"
          type="primary"
        />
      </div>
    </div>
  );
};

export default LandingArticle;
