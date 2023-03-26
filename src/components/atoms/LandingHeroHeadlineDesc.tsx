import { FC, Fragment, ReactElement } from "react";

const HeadlineDesc: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-12 lg:px-16 xl:px-[280px] text-center mb-6 md:mb-8 lg:mb-10">
      <p className="text-neautral-700 text-sm lg:text-base">
        LMS M-Knows adalah Platform pelatihan yang berbasis Web dan Mobile Apps yang digunakan untuk
        mengelola Program pelatihan karyawan yang bisa di akses kapanpun dan dimanapun.
      </p>
    </div>
  );
};

export default HeadlineDesc;
