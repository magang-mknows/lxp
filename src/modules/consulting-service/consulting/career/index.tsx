import CareerConsultingPage from "@/components/organism/career-consulting-page";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const CareerConsultingModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <CareerConsultingPage />
    </ContentProvider>
  );
};

export default CareerConsultingModule;
