import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import LandingCatalogContent from "../atoms/LandingCatalogContent";
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
    <div className="px-16 py-20 bg-neutral-100">
      <LandingCatalogTitle />
      <LandingCatalogDesc />
      <div className="grid gap-10 grid-cols-3">
        {dummyCatalogs.map((catalog, index) => {
          return (
            <section key={index} className="bg-neautral-50 rounded-md overflow-hidden shadow-sm">
              <LandingCatalogThumb id={index + 1} />
              <div className="flex justify-between items-end px-5 mb-3">
                <LandingCatalogContent desc={catalog.desc} title={catalog.title} />
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
