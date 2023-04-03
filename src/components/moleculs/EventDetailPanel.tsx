"use client";
import { Tab } from "@headlessui/react";
import { FC, ReactElement } from "react";

const EventDetailPanel: FC = (): ReactElement => {
  return (
    <Tab.Panels>
      <Tab.Panel>
        <h1>desc</h1>
      </Tab.Panel>
      <Tab.Panel>
        <h1>info</h1>
      </Tab.Panel>
      <Tab.Panel>
        <h1>contact</h1>
      </Tab.Panel>
    </Tab.Panels>
  );
};

export default EventDetailPanel;
