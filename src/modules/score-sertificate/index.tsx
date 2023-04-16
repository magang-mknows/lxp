import ScoreSertificatePage from "@/components/organism/ScoreSertificatePage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const ScoreSertificateModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <ScoreSertificatePage />
    </ContentProvider>
  );
};

export default ScoreSertificateModule;
