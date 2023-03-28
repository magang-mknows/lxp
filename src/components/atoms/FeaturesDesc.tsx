import { FC, ReactElement } from "react";

const FeaturesDesc: FC = (): ReactElement => {
  return (
    <section className=" px-8 md:px-14 lg:px-16 py-2 md:py-4 lg:py-8 flex flex-col justify-center items-center mb-3 ">
      <div className="max-w-[720px] text-center">
        <h1 className="font-bold text-neutral-900 text-3xl mb-4">Fitur Kampus Gratis</h1>
        <p className="text-neutral-400 text-sm font-medium">
          Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di Kampus Gratis.
          Berbagai macam jenis materi tersedia.
        </p>
      </div>
    </section>
  );
};

export default FeaturesDesc;
