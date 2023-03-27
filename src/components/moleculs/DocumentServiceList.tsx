import { FC, ReactElement } from "react";
import DocumentServiceCard from "../atoms/DocumentServiceCard";

const DocumentServiceList: FC = (): ReactElement => {
  const dummyDocTemplate = [
    { title: "Administrasi Pengguna Baru", total: 1 },
    { title: "Pelayanan Daftar Ulang", total: 1 },
    { title: "Pembuatan KIP Fisik", total: 1 },
    { title: "Surat Keterangan Aktif Bekerja", total: 1 },
    { title: "Surat Keterangan Cuti", total: 1 },
    { title: "Penerbitan Ijazah, Akta, Transkrip, Dan KIP", total: 1 },
    { title: "Administrasi Kinerja", total: 1 },
    { title: "Surat Keterangan Kinerja", total: 1 },
  ];

  return (
    <section className="px-8 md:px-14 lg:px-32 justify-center flex-wrap flex gap-x-16 gap-y-12 pb-40">
      {dummyDocTemplate.map((doc, index) => {
        return (
          <DocumentServiceCard
            key={index}
            title={doc.title}
            desc={doc.total as unknown as string}
          />
        );
      })}
    </section>
  );
};

export default DocumentServiceList;
