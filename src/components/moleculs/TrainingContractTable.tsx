"use client";
import { showDetailTraining } from "@/store/training-plan";
import Image from "next/image";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";

const TrainingContractTable: FC = (): ReactElement => {
  const [isShowDetail, setShowDetail] = useRecoilState(showDetailTraining);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className=" rounded-lg shadow overflow-hidden ">
            <table className="min-w-full  divide-neutral-400 ">
              <thead className="bg-secondary-blue-100/20 border-b-2 border-neutral-200">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Nama Pelatihan
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center  text-neutral-800 text-base "
                  >
                    Kode Pelatihan
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Jumlah Poin
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Batch
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Jumlah Pertemuan
                  </th>
                </tr>
              </thead>
              <tbody className=" text-center  text-neutral-800 font-bold">
                <tr>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm dark:text-neutral-50 ">
                    1
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
                          src={`/assets/landing/waiting.webp`}
                          alt="offer-view"
                          className=" w-full h-full relative z-20  "
                          height={50}
                          width={50}
                          loading="lazy"
                        />
                      </figure>
                      <section className="flex flex-col items-start justify-start">
                        <h1 className="font-bold text-base">Pelatihan Komunikasi Efektif</h1>
                        <p className="text-sm text-neutral-600">18 Karyawan Terdaftar</p>
                      </section>
                    </section>
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm ">
                    172GHWF
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200  dark:border-r-white whitespace-nowrap text-sm">
                    3 Poin
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                    1
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                    14 Pertemuan
                  </td>
                </tr>

                <tr>
                  <td scope="col" className="text-left py-4 "></td>
                  <td scope="col" className="text-left py-4 px-6 " colSpan={3}>
                    Total Poin
                  </td>
                  <td className="col-span-4 py-4 ">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingContractTable;
