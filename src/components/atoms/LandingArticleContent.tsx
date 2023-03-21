import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const LandingArticleContent: FC<TCardContentProps> = ({ desc, title }): ReactElement => {
  return (
    <div>
      <h1 className="font-bold min-h-[50px] text-neautral-900 text-base mb-2">
        Meningkatkan Output Perusahaan dengan Pelatihan Karyawan
      </h1>
      <p className="text-neautral-700 text-sm">
        Pelatihan karyawan telah menjadi salah satu elemen penting dalam pengembangan organisasi dan
        peningkatan produktivitas perusahaan.{" "}
      </p>
    </div>
  );
};

export default LandingArticleContent;
