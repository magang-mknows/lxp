"use client";
import { Tab } from "@headlessui/react";
import { FC, Fragment, ReactElement } from "react";
import EventCard from "../atoms/EventCard";
import EventContactCard from "../atoms/EventContactCard";
import EventDetaiDescription from "../atoms/EventDetaiDescription";
import RelatedEvent from "../atoms/RelatedEvent";

const EventDetailTab: FC = (): ReactElement => {
  return (
    <main className=" min-h-[80vh] ">
      <Tab.Group>
        <Tab.List
          as={"div"}
          className="flex gap-2  mb-5 text-base border-b-[0.5px] border-neutral-400 text-neutral-400"
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`${
                  selected
                    ? "border-b-2 outline-none  focus:outline-none active:outline-none   border-version3-500 text-version3-500"
                    : ""
                } py-2 px-4 cursor-pointer  font-bold`}
              >
                Deskripsi
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`${
                  selected ? "border-b-2 outline-none  border-version3-500 text-version3-500" : ""
                } py-2 px-4 cursor-pointer  font-bold`}
              >
                Informasi
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`${
                  selected ? "border-b-2 outline-none  border-version3-500 text-version3-500" : ""
                } py-2 px-4 cursor-pointer  font-bold`}
              >
                Kontak
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 py-4">
              <EventDetaiDescription />
              <RelatedEvent />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 py-4">
              <div className="col-span-3 xl:col-span-2">
                <h1 className="text-neutral-900 text-lg mb-5">Detail Acara</h1>
                <EventCard isOrder={true} />
                <EventCard isOrder={false} />
              </div>
              <RelatedEvent />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 py-4">
              <div className="col-span-3 xl:col-span-2">
                <h1 className="text-neutral-900 text-lg mb-5">Hubungi Panitia</h1>
                <EventContactCard />
              </div>
              <RelatedEvent />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </main>
  );
};

export default EventDetailTab;
