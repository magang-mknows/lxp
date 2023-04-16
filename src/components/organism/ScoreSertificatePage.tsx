"use client";
import { showDetailState } from "@/modules/score-sertificate/store";
import { ScoreSertificateBreadCumbs, ScoreSertificateMenu } from "@/utils/const";
import { Tab } from "@headlessui/react";
import { FC, Fragment, ReactElement, Suspense } from "react";
import { useRecoilState } from "recoil";
import Breadcums from "../atoms/Breadcums";
import BaseScoreTable from "../moleculs/BaseScoreTable";
import ScoreChart from "../moleculs/ScoreChart";
import ScoreSummaryTable from "../moleculs/ScoreSummaryTable";
import SertificateList from "../moleculs/SertificateList";

const ScoreSertificatePage: FC = (): ReactElement => {
  const [getShowDetail, setShowDetail] = useRecoilState(showDetailState);

  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <Breadcums items={ScoreSertificateBreadCumbs} />
      <main className=" min-h-[80vh] px-8 md:px-14 lg:px-16 ">
        <Tab.Group>
          <Tab.List
            as={"div"}
            className="flex gap-2  mb-5 text-base border-b-[0.5px] border-neutral-400 text-neutral-400"
          >
            {ScoreSertificateMenu.map((menu, index) => {
              return (
                <Tab as={Fragment} key={index}>
                  {({ selected }) => (
                    <div
                      className={`${
                        selected
                          ? " font-bold border-b-2 outline-none   border-version3-500 text-version3-500"
                          : ""
                      } py-2 px-4 cursor-pointer text-base`}
                      onClick={() => {
                        setShowDetail(false);
                      }}
                    >
                      {menu}
                    </div>
                  )}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel
              as="section"
              className={`${getShowDetail ? "" : "grid grid-cols-1 lg:grid-cols-2 gap-10"} py-2 `}
            >
              {getShowDetail ? (
                <BaseScoreTable />
              ) : (
                <Suspense>
                  <ScoreChart />
                  <ScoreSummaryTable />
                </Suspense>
              )}
            </Tab.Panel>

            <Tab.Panel as="section" className="py-2">
              <Suspense>
                <SertificateList />
              </Suspense>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </section>
  );
};

export default ScoreSertificatePage;
