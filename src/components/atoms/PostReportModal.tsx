import { RxCross1 } from "react-icons/rx";
import { BiRightArrow } from "react-icons/bi";
import { FC, ReactElement } from "react";

const PostReportModal: FC = (): ReactElement => {
  const reportOption = [
    {
      title: "Ini adalah spam",
    },
    {
      title: "Ujaran atau simbol kebencian",
    },
    {
      title: "Kekerasan atau organisasi berbahaya",
    },
    {
      title: "Ketelanjangan atau aktivitas seksual",
    },
    {
      title: "Penjualan barang ilegal atau barang dengan izin khusus",
    },
    {
      title: "Perundungan (bullying) atau pelecehan",
    },
    {
      title: "Pelanggaran hak kekayaan intelektual",
    },
    {
      title: "Bunuh diri atau melukai diri sendiri",
    },
    {
      title: "Gangguan makan",
    },
    {
      title: "Penipuan atau penggelapan",
    },
    {
      title: "Informasi palsu",
    },
    {
      title: "Saya hanya tidak menyukainya",
    },
  ];
  return (
    <section className="bg-neutral-50">
      <header className="w-full flex justify-center border-b-[0.5px] py-2 border-neutral-300  relative">
        <h1 className="font-bold text-base text-neutral-900">Laporkan</h1>
        <RxCross1 className="text-neutral-400 text-xl absolute right-0" />
      </header>
      <main className="text-sm py-4 flex flex-col gap-4">
        <h1 className="font-bold text-neutral-900">Mengapa Anda Melaporkan Postingan ini ?</h1>
        {reportOption.map((item, index) => {
          return (
            <section key={index} className="w-full flex justify-between gap-4">
              <div className="text-neutral-800 w-full text-left">
                <p>{item.title} update branch ds room</p>
              </div>
              <BiRightArrow className="text-neutral-400" />
            </section>
          );
        })}
      </main>
    </section>
  );
};

export default PostReportModal;
