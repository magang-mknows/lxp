import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import LandingCatalogContentDesc from "../atoms/LandingCatalogContentDesc";
import LandingCatalogContentTitle from "../atoms/LandingCatalogContentTitle";
import LandingCatalogContent from "../atoms/LandingCatalogContentTitle";
import LandingCatalogDesc from "../atoms/LandingCatalogDesc";
import LandingCatalogThumb from "../atoms/LandingCatalogThumb";
import LandingCatalogTitle from "../atoms/LandingCatalogTitle";

const LandingCatalog: FC = (): ReactElement => {
  const dummyCatalogs = [
    {
      title: "Pelatihan dan Pengembangan Karyawan",
      desc: "200 Karyawan",
    },
    {
      title: "Pelatihan dan Pengembangan Karyawan",
      desc: "230 Karyawan",
    },
    {
      title: "Pelatihan dan Pengembangan Karyawan",
      desc: "100 Karyawan",
    },
  ];

  return (
    <div className="px-8 md:px-14 lg`:`px-16 py-12 md:py-14 lg:py-16 xl:py-20 bg-neutral-100">
      <LandingCatalogTitle />
      <LandingCatalogDesc />
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dummyCatalogs.map((catalog, index) => {
          return (
            <section key={index} className="bg-neutral-50  rounded-md overflow-hidden shadow-sm">
              <LandingCatalogThumb id={index + 1} />
              <LandingCatalogContentTitle title={catalog.title} />
              <div className="flex justify-between items-end px-5 mb-3">
                <LandingCatalogContentDesc desc={catalog.desc} />
                <Button text="Join now" size="tiny" type="primary" />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default LandingCatalog;
