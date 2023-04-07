import { FC, Fragment, ReactElement } from "react";
import SertificateCard from "../atoms/SertificateCard";
import SertificateFilter from "./SertificateFilter";

const SertificateList: FC = (): ReactElement => {
  return (
    <Fragment>
      <SertificateFilter />
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <SertificateCard />
      </section>
    </Fragment>
  );
};

export default SertificateList;
