import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import LandingCatalogThumb from "../atoms/LandingCatalogThumb";

const LandingCatalogCard: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {[...Array(3)].map((data, index) => {
        return (
          <section key={index} className="bg-neautral-50 rounded-md overflow-hidden shadow-sm">
            <LandingCatalogThumb id={index + 1} />
            <h1 className="mb-2 px-5 py-2 font-bold">Pelatihan dan Pengembangan Karyawan</h1>
            <div className="flex justify-between items-center px-5 mb-3">
              <section className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-lg bg-version3-500 block"></span>
                <p className="text-xs font-medium">300 Karyawan</p>
              </section>
              <Button text="Join now" size="w-20" type="primary" />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default LandingCatalogCard;
