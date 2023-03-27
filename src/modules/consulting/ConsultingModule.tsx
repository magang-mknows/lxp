import ConsultingPage from "@/components/organism/ConsultingPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const ConsultingModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <ConsultingPage />
    </ContentProvider>
  );
};

export default ConsultingModule;
