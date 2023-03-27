import { FC, ReactElement } from "react";

import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
import ConsultingProductCard from "../atoms/ConsultingProductCard";

const ConsultingProduct: FC = (): ReactElement => {
  const consultingProducts = [
    {
      title: "Konsultasi",
      detailList: [
        "Konsultasi Karir dan Cita-Cita",
        "Konsultasi Masalah Keluarga dan Keuangan",
        "Konsultasi Masalah Pribadi",
        "Konsultasi Kinerja",
        "Konsultasi Lainnya",
      ],
      icon: <BsPersonCheck />,
    },
    {
      title: "Layanan",
      detailList: [
        "Dokumen (Unduh berbagai dokumen)",
        "Proses Dokumen (Ajukan dokumen yang telah di download)",
        "Cek Status Dokumen",
      ],
      icon: <RiCustomerService2Fill />,
    },
  ];

  return (
    <section className="px-8 md:px-14 lg:px-16 flex flex-wrap gap-20 justify-center mb-28">
      {consultingProducts.map((product, index) => {
        return (
          <ConsultingProductCard
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

export default ConsultingProduct;
