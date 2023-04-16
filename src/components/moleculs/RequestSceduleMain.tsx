"use client";
import { FC, Fragment, ReactElement } from "react";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiCalendarEvent } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Button from "../atoms/Button";
import RequestScheduleInstrucion from "../atoms/RequestScheduleInstrucion";
import SceduleInformationHeader from "../atoms/SceduleInformationHeader";
import SceduleButton from "../atoms/SceduleButton";
import Modal from "../atoms/Modal";
import RequestSceduleSuccessModal from "../atoms/RequestSceduleSuccessModal";
import {
  dummyRegisteredSimulation,
  dummySceduleSimulation,
  selectedDateSimulation,
  successPopupState,
} from "@/modules/drill-simulation/store";

const RequestSceduleMain: FC = (): ReactElement => {
  const pathname = usePathname() as unknown as string;
  const currentPath = decodeURIComponent(pathname).split("/");
  const getSelectedDrill = useRecoilValue(dummySceduleSimulation);
  const setSelectedSimulation = useSetRecoilState(dummyRegisteredSimulation);

  const [getSelected, setSelected] = useRecoilState(selectedDateSimulation);
  const data = getSelectedDrill.filter((item) => {
    return item.title === currentPath[currentPath.length - 1];
  });

  const [isShowPopup, setShowPopup] = useRecoilState(successPopupState);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
      <aside>
        <figure className="h-[220px]  rounded-md overflow-hidden mb-4  w-full">
          <Image
            src={"/assets/drill/dummyImg.svg"}
            alt="dummy-view"
            width={100}
            height={70}
            className="w-full"
          />
        </figure>
        <RequestScheduleInstrucion />
      </aside>
      {data.map((item, index) => {
        return (
          <article key={index}>
            <SceduleInformationHeader
              title={item.title}
              subTitle={item.lecture}
              desc={item.location}
            />
            <main>
              <h1 className="text-sm font-bold mb-3">Pilih tanggal dan waktu Simulasi</h1>
              <section className="w-full flex flex-wrap lg:flex-nowrap  mb-4 gap-2">
                {item.schedule.map((time, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        time.date === getSelected.date
                          ? "bg-version3-500 text-neutral-50"
                          : "bg-neutral-50 text-neutral-500 hover:text-neutral-100 "
                      } flex gap-2 w-full  px-4 py-2 cursor-pointer hover:bg-version2-500 transition-all ease-out duration-300 shadow-sm hover:shadow-md  items-center border-[1px] border-neutral-500 rounded-md`}
                      onClick={() => {
                        setSelected({ ...getSelected, date: time.date, time: "" });
                      }}
                    >
                      <BiCalendarEvent className="text-2xl" />
                      <h1 className="text-xs">{time?.date}</h1>
                    </div>
                  );
                })}
              </section>
              {item.schedule
                .filter((schedule) => {
                  return schedule.date === getSelected.date;
                })
                .map((detail, index) => {
                  return (
                    <Fragment key={index}>
                      {detail.time.map((time, index) => {
                        return (
                          <Disclosure
                            key={index}
                            as="div"
                            className="mb-3 hover:shadow-md transition-all ease-in-out duration-150 shadow-sm"
                          >
                            <SceduleButton text={time.title} />
                            <Disclosure.Panel as="div" className={"bg-neutral-100/60 px-6"}>
                              {({ close }) => (
                                <section className="py-3 flex w-full gap-2 ">
                                  {time.value.map((val, index) => {
                                    return (
                                      <div
                                        onClick={() => {
                                          setSelected({ ...getSelected, time: val });
                                        }}
                                        key={index}
                                        className={`${
                                          val == getSelected.time
                                            ? "bg-version3-500 text-neutral-50 "
                                            : "bg-neutral-50 text-neutral-700 hover:text-neutral-100 hover:bg-version3-500 "
                                        } min-w-[80px] flex  px-3 py-1  cursor-pointer hover:shadow-md transition-all ease-in-out  gap-1 border-r-neutral-500 duration-150 rounded-md shadow-sm items-center  border-[1px] `}
                                      >
                                        <BsCheck className="text-2xl" />
                                        <h1 className="text-xs">{val}</h1>
                                      </div>
                                    );
                                  })}
                                </section>
                              )}
                            </Disclosure.Panel>
                          </Disclosure>
                        );
                      })}
                    </Fragment>
                  );
                })}
            </main>
            <div className="w-full flex justify-end py-4">
              <Button
                type="primary"
                text="Ajukan Jadwal Simulasi"
                size="extraLarge"
                disabled={getSelected.time === "" || getSelected.date === "" ? true : false}
                onClick={() => {
                  setShowPopup(true);
                  setSelectedSimulation((prev) => [
                    ...prev,
                    {
                      lecture: item.lecture,
                      schedule: [
                        {
                          date: getSelected.date,
                          time: [
                            {
                              title: getSelected.date,
                              value: [getSelected.time],
                            },
                          ],
                        },
                      ],
                      title: item.title,
                      ImgSrc: "/assets/drill/dummyImg.svg",
                      category: item.category,
                      location: item.location,
                      status: "registered",
                    },
                  ]);
                }}
              />
            </div>
          </article>
        );
      })}
      <Modal
        withClose={false}
        hasImage={false}
        lookup={isShowPopup}
        onClose={() => {
          setShowPopup(false);
        }}
      >
        <RequestSceduleSuccessModal title="Berhasil Mengajukan Simulasi!" type="sent">
          <p className="text-neutral-500 text-sm text-center">
            Kamu telah mengajukan simulasi di hari
            <span className="font-bold">
              {" "}
              {getSelected.date} Pukul {getSelected.time} WIB,
            </span>{" "}
            Link Zoom simulasi akan dikirimkan melalui email.
          </p>
          <section className="w-full flex justify-center pt-4">
            <Button
              type="primary"
              text="tutup"
              size="medium"
              onClick={() => {
                setShowPopup(false);
              }}
            />
          </section>
        </RequestSceduleSuccessModal>
      </Modal>
    </main>
  );
};

export default RequestSceduleMain;
