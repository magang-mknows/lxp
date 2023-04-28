import { FC, ReactElement } from "react";

const TrainingDetailTableHeader: FC = (): ReactElement => {
  return (
    <tr>
      <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
        No
      </th>
      <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
        Nama Pelatihan
      </th>
      <th scope="col" className=" col-span-2 px-6 py-3 text-center  text-neutral-800 text-base ">
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
  );
};

export default TrainingDetailTableHeader;
