import { FC, Fragment, ReactElement } from "react";
import ConsultingChatCard from "../atoms/consulting-chat-card";
import ConsultingSearch from "../atoms/consulting-search";

const ConsultingChatList: FC = (): ReactElement => {
  return (
    <Fragment>
      <ConsultingSearch />
      <div>
        <h1 className="text-sm font-bold text-neutral-800 mb-3">
          Riwayat Chat Karir dan Cita-Cita
        </h1>
        <div className="h-fit w-full bg-neutral-50 rounded-md shadow-sm px-5 py-7">
          <ConsultingChatCard />
          <ConsultingChatCard />
        </div>
      </div>
    </Fragment>
  );
};

export default ConsultingChatList;
