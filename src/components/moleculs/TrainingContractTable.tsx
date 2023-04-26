import Image from "next/image";
import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import { IoMdAdd } from "react-icons/io";
import { useRecoilState } from "recoil";
import { showDetailTraining } from "@/modules/training-plan/store";

const TrainingContractTable: FC = (): ReactElement => {
  const [isShowDetail, setShowDetail] = useRecoilState(showDetailTraining);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle  scrollbar-hide md:scrollbar-default">
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
                    Kode
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Batch
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Jumlah Pertemuan
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Jumlah Poin
                  </th>
                </tr>
              </thead>
              <tbody className=" text-center   text-neutral-800 ">
                <tr className="bg-neutral-100/80">
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
                      <figure className="h-14 w-14">
                        <Image
                          src={`/assets/landing/waiting.webp`}
                          alt="offer-view"
                          className=" w-full h-full relative z-20  "
                          height={50}
                          width={50}
                          loading="eager"
                        />
                      </figure>
                      <section className="flex flex-col items-start justify-start">
                        <h1 className="font-bold text-base">Pelatihan Komunikasi Efektif</h1>
                        <p className="text-sm font-normal text-neutral-400">
                          18 Karyawan Terdaftar
                        </p>
                      </section>
                    </section>
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm ">
                    172GHWF
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                    1
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                    14 Pertemuan
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200  dark:border-r-white whitespace-nowrap text-sm">
                    3 Poin
                  </td>
                </tr>

                <tr className="font-bold">
                  <td scope="col" className="text-left py-4 "></td>
                  <td scope="col" className="text-left py-4 px-6 " colSpan={4}>
                    Total Poin
                  </td>
                  <td className="col-span-4 py-4 ">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-end">
        <Button
          icon={<IoMdAdd />}
          iconPosition="left"
          type="primary"
          text="Mengajukan"
          size="large"
          className="!bg-[#3EB449] !px-8 !border-none hover:!bg-[#319a3b]"
        />
      </div>
    </div>
  );
};

export default TrainingContractTable;
