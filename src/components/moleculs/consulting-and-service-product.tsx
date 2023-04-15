import { FC, ReactElement } from "react";

import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
import ConsultingAndServiceProductCard from "../atoms/consulting-and-service-product-card";

const ConsultingAndServiceProduct: FC = (): ReactElement => {
  const consultingAndServiceProducts = [
    {
      title: "Konsultasi",
      detailList: [
        { text: "Konsultasi Karir dan Cita-Cita", link: "konsultasi-karir" },
        { text: "Konsultasi Masalah Keluarga dan Keuangan", link: "dokumen" },
        { text: "Konsultasi Masalah Pribadi", link: "dokumen" },
        { text: "Konsultasi Kinerja", link: "dokumen" },
        { text: "Konsultasi Lainnya", link: "dokumen" },
      ],
      icon: <BsPersonCheck />,
    },
    {
      title: "Layanan",
      detailList: [
        { text: "Dokumen (Unduh berbagai dokumen)", link: "dokumen" },
        { text: "Proses Dokumen (Ajukan dokumen yang telah di download)", link: "proses-dokumen" },
        { text: "Cek Status Dokumen", link: "status-dokumen" },
      ],
      icon: <RiCustomerService2Fill />,
    },
  ];

  return (
    <section className="px-8 md:px-14 lg:px-16 flex flex-wrap gap-20 justify-center mb-28">
      {consultingAndServiceProducts.map((product, index) => {
        return (
          <ConsultingAndServiceProductCard
            key={index}
            title={product.title}
            detailList={product.detailList}
            icon={product.icon}
          />
        );
      })}
    </section>
  );
};

export default ConsultingAndServiceProduct;
