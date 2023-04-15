import dynamic from "next/dynamic";
import { FC, ReactElement } from "react";
import UniqueSidebarHeader from "../atoms/unique-sidebar-header";

const UniqueSidebarOptions = dynamic(() => import("../atoms/unique-sidebar-options"), {
  ssr: true,
});

const UniqueEventSidebar: FC = (): ReactElement => {
  return (
    <section className="col-span-2 lg:col-span-1">
      <UniqueSidebarHeader />
      <UniqueSidebarOptions />
    </section>
  );
};

export default UniqueEventSidebar;
