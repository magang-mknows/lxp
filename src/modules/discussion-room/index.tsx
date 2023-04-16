import DiscussionRoomPage from "@/components/organism/DisscussionRoomPage";
import ContentProvider from "@/providers/ContentProvider";
import { FC, ReactElement } from "react";

const DiscussionRoomModule: FC = (): ReactElement => {
  return (
    <ContentProvider>
      <DiscussionRoomPage />
    </ContentProvider>
  );
};

export default DiscussionRoomModule;
