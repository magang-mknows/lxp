import dynamic from "next/dynamic";
import { FC, ReactElement } from "react";
import UniqueSidebaerHeader from "../atoms/UniqueSidebaerHeader";

const UniqueSidebarOptions = dynamic(() => import("../atoms/UniqueSidebarOptions"), {
  ssr: true,
});

const UniqueEventSidebar: FC = (): ReactElement => {
  return (
    <section className="col-span-1">
      <UniqueSidebaerHeader />
      <UniqueSidebarOptions />
    </section>
  );
};

export default UniqueEventSidebar;
