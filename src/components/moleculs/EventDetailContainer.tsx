"use client";

import { Tab } from "@headlessui/react";

import Image from "next/image";
import { FC, Fragment, ReactElement } from "react";

import { BsCheckCircleFill } from "react-icons/bs";

const dummyBenefits = [
  "Sertifikat",
  "Pemahaman tentang Cyber Security",
  "Ilmu langsung dari seorang Cyber Security",
];

const EventDetailContainer: FC = (): ReactElement => {
  return (
    <div className="">
      <section className="lg:flex block gap-36 mb-10">
        <Image
          src={"/assets/event/event.svg"}
          className="w-[720px] mb-2"
          height={100}
          width={100}
          alt="event-view"
        />
        <div className="py-4">
          <h1 className="text-2xl font-bold mb-7 text-neutral-900">Webinar Cyber Security</h1>
          <div className="mb-7">
            <h1 className="text-lg text-neutral-600 mb-2">Benefit</h1>
            {dummyBenefits.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-x-1.5 items-center mb-2 text-sm text-neutral-800"
                >
                  <BsCheckCircleFill className="text-primary-600 text-xl" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
          <h1 className="text-red-500 font-bold text-lg mb-7">GRATIS</h1>
          <p className="text-sm text-neutral-600 mb-7">Tuesday, 28 February 2023 19:00 WIB</p>
        </div>
      </section>

      {/* tab */}
      <main className=" min-h-[80vh] py-4 ">
        <Tab.Group>
          <Tab.List
            as={"div"}
            className="flex gap-2  mb-5 text-sm font-medium border-b-2 text-neutral-400"
          >
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <div
                  className={`${
                    selected ? "border-b-2 outline-none   border-primary-500 text-primary-500" : ""
                  } py-2 px-4 cursor-pointer  font-bold`}
                >
                  Deskripsi
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <div
                  className={`${
                    selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                  } py-2 px-4 cursor-pointer  font-bold`}
                >
                  Informasi
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <div
                  className={`${
                    selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                  } py-2 px-4 cursor-pointer  font-bold`}
                >
                  Kontak
                </div>
              )}
            </Tab>
          </Tab.List>
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
        </Tab.Group>
      </main>
    </div>
  );
};

export default EventDetailContainer;
