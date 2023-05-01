"use client";
import { showDetailTraining } from "@/modules/training-plan/store";
// import { useGetSubjectByDepartmenId } from "@/modules/training-plan/training-information/hook";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import TrainingDetail from "./TrainingDetail";
import TrainingDetailTableHeader from "../atoms/TrainingDetailTableHeader";
import { showSelectedDetail } from "@/modules/training-plan/training-information/store";

const TrainingInformationTable: FC = (): ReactElement => {
  const { query } = useRouter();

  // const { data } = useGetSubjectByDepartmenId(query?.slug as unknown as string);
  // const subjects = data?.data;

  const [selectedDetail, setSelectedDetail] = useRecoilState(showSelectedDetail);
  const [isShowDetail, setShowDetail] = useRecoilState(showDetailTraining);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle  scrollbar-hide md:scrollbar-default">
          <div className=" rounded-lg shadow overflow-hidden ">
            <table className="min-w-full  divide-neutral-400 ">
              <thead className="bg-secondary-blue-100/20 border-b-2 border-neutral-200">
                <TrainingDetailTableHeader />
              </thead>
              {/* <tbody className=" text-center   text-neutral-800 ">
                {subjects?.map((subject, index) => {
                  return (
                    <tr
                      className="bg-neutral-100/80"
                      key={index}
                      onClick={() => {
                        setSelectedDetail(subject.id);
                      }}
                    >
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm dark:text-neutral-50 ">
                        {index + 1}
                      </td>
                      <td
                        className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm dark:text-neutral-50 "
                        onClick={() => {
                          setShowDetail(!isShowDetail);
                        }}
                      >
                        <section className="flex gap-4 items-center">
                          <figure className="h-16 w-16">
                            <Image
                              src={subject?.thumbnail}
                              alt="offer-view"
                              className=" w-full h-full relative z-20  "
                              height={50}
                              width={50}
                              loading="lazy"
                            />
                          </figure>
                          <section className="flex flex-col items-start justify-start">
                            <h1 className="font-bold text-base">{subject?.name}</h1>
                            <p className="text-sm font-normal text-neutral-400">
                              18 Karyawan Terdaftar
                            </p>
                          </section>
                        </section>
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm ">
                        {subject?.subject_code}
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200  dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.credit} Poin
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.level}
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.session_total_number} Pertemuan
                      </td>
                      <div
                        className={`${isShowDetail ? " top-0 bottom-0 " : " -bottom-[200%]"} ${
                          selectedDetail === subject.id ? "" : "hidden"
                        }  transition-all left-0 right-0 bg-neutral-600/20 ease-in-out  flex justify-center items-end duration-300  z-50 lg:px-48  flex-wrap absolute `}
                      >
                        <TrainingDetail
                          name={subject.name}
                          basic_competencies={subject?.basic_competencies}
                          session_total_number={subject?.session_total_number}
                          indicator={subject?.indicator}
                          teaching_materials={subject?.teaching_materials}
                          tools_needed={subject?.tools_needed}
                          study_experience={subject?.study_experience}
                        />
                      </div>
                    </tr>
                  );
                })}

                <tr className="font-bold">
                  <td scope="col" className="text-left py-4 "></td>
                  <td scope="col" className="text-left py-4 px-6 " colSpan={2}>
                    Total Poin
                  </td>
                  <td className="col-span-4 py-4 ">
                    {subjects?.reduce((prev, subject) => prev + subject.credit, 0)}
                  </td>
                </tr>
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingInformationTable;
