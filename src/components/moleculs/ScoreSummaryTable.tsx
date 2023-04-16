"use client";
import React, { FC, ReactElement } from "react";
import { useSetRecoilState } from "recoil";
import Button from "../atoms/Button";
import { showDetailState } from "@/modules/score-sertificate/store";

const ScoreSummaryTable: FC = (): ReactElement => {
  const setShowDetail = useSetRecoilState(showDetailState);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-white dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-neutral-400 ">
              <thead className="bg-version2-400">
                <tr className="divide-x divide-neutral-300 ">
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                  >
                    Semester
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                  >
                    SKS Diambil
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                  >
                    SKS Luus
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                  >
                    IPK
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-400 dark:divide-gray-700 text-center text-neutral-800 font-bold">
                <tr>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-neutral-50 ">
                    3
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-neutral-50 ">
                    108
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm  dark:text-white">
                    96
                  </td>
                  <td className="px-6 py-4  border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    3
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    108
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    96
                  </td>
                  <td className="px-6 py-4  border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    3
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    108
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    96
                  </td>
                  <td className="px-6 py-4  border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td scope="col" className="text-centerpy-4 dark:text-white" colSpan={3}>
                    Rata-rata
                  </td>
                  <td className="col-span-4 py-4 dark:text-white">4.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-end"
        onClick={() => {
          setShowDetail(true);
        }}
      >
        <Button text="Lihat Detail Nilai" type="primary" size="extraLarge" />
      </div>
    </div>
  );
};

export default ScoreSummaryTable;
