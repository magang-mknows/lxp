import ConsultingAndServicePage from "@/components/organism/ConsultingAndServicePage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const ConsultingAndServiceModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <ConsultingAndServicePage />
    </ContentProvider>
  );
};

export default ConsultingAndServiceModule;
