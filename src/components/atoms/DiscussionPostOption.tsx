import { FC, ReactElement, useState } from "react";
import { GoKebabVertical } from "react-icons/go";
import { AiFillFlag } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal";

import { RxCross1 } from "react-icons/rx";
import { BiRightArrow } from "react-icons/bi";

const DiscussionPostOption: FC = (): ReactElement => {
  const options = [
    {
      title: "Report",
      icon: <AiFillFlag className="text-blue-600" />,
    },
    {
      title: "Edit",
      icon: <BsPencilFill className="text-version3-400" />,
    },
    {
      title: "Delete",
      icon: <MdDelete className="text-warning-500" />,
    },
  ];

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

  const [isReport, setReport] = useState(false);

  return (
    <Menu as="div" className={" inline-block bg-neutral-50/0   text-left left-0 mt-1.5"}>
      <Menu.Button>
        <div className="cursor-pointer text-neutral-800 group">
          <GoKebabVertical />
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items
          as="div"
          className="absolute bg-neutral-50 right-0 overflow-hidden origin-top-right bg-white rounded-md shadow-lg top-2 w-30 "
        >
          {options.map(({ icon, title }, index) => (
            <Menu.Item
              key={index}
              as="div"
              className={
                "flex gap-3 items-center px-4 py-3 cursor-pointer  hover:bg-neutral-100 transition-all duration-300 ease-in-out"
              }
              onClick={() => {
                setReport(true);
              }}
            >
              {icon}
              <h1 id="post-option" className="text-[#171717]  text-xs text-center">
                {title}
              </h1>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
      <Modal withClose={false} hasImage={false} lookup={isReport} onClose={() => setReport(false)}>
        <section className="bg-neutral-50">
          <header className="w-full flex justify-center border-b-[0.5px] py-2 border-neutral-300  relative">
            <h1 className="font-bold text-base text-neutral-900">Laporkan</h1>
            <RxCross1 className="text-neutral-400 text-xl absolute right-0" />
          </header>
          <main className="text-sm py-4 flex flex-col gap-4">
            <h1 className="font-bold text-neutral-900">Mengapa Anda Melaporkan Postingan ini ?</h1>
            {reportOption.map((item, index) => {
              return (
                <section
                  key={index}
                  className="w-full flex justify-between gap-4"
                  onClick={() => {
                    setReport(false);
                  }}
                >
                  <div className="text-neutral-800 w-full text-left">
                    <p>{item.title}</p>
                  </div>
                  <BiRightArrow className="text-neutral-400" />
                </section>
              );
            })}
          </main>
        </section>
      </Modal>
    </Menu>
  );
};

export default DiscussionPostOption;
