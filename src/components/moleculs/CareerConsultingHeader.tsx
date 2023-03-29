import { FC, ReactElement } from "react";
import CareerConsultingTitle from "../atoms/CareerConsultingTitle";

const CareerConsultingHeader: FC = (): ReactElement => {
  return (
    <section className="py-6 relative px-8 md:px-14 lg:px-14 flex flex-col justify-center items-center">
      <CareerConsultingTitle />
    </section>
  );
};

export default CareerConsultingHeader;
