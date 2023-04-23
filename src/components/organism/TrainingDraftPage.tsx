import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import { TrainingContractBreadCumbs } from "@/utils/const";
import { IoAlertCircle } from "react-icons/io5";
import { Tab } from "@headlessui/react";
import TrainingContractTab from "../moleculs/TrainingContractTab";
import RepeatTrainingTable from "../moleculs/RepeatTrainingTable";
import RepeatTrainingTab from "../moleculs/RepeatTrainingTab";

const TrainingDraftPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      <Breadcums items={TrainingContractBreadCumbs} />
      <header className="px-8 md:px-14 mb-6 lg:px-16 pt-4">
        <h1 className="text-xl font-bold mb-4 w-full border-b-[1px] border-neutral-300 pb-4">
          Pelatihan Keterampilan Interpersonal
        </h1>
        <section className="flex gap-2 w-full items-center bg-secondary-blue-100/50 px-4 py-2 rounded-md shadow-sm">
          <IoAlertCircle className="text-xl text-secondary-blue-500" />
          <h1 className="text-sm text-secondary-blue-500">
            Pelatihan yang ditambahkan dapat dilihat pada tab{" "}
            <span className="font-bold">Draft Pelatihan</span>
          </h1>
        </section>
      </header>
      <main className="px-8 md:px-14 lg:px-16">
        <Tab.Group>
          <Tab.List className="border-b-2 border-neutral-200 mb-6">
            <Tab>
              {({ selected }) => (
                <h1
                  className={`${
                    selected
                      ? "text-version2-500 border-version2-500 border-b-2 font-bold"
                      : " text-neutral-400"
                  } text-sm pb-2 mr-4 transition-all ease-in-out duration-75`}
                >
                  Kontrak Pelatihan
                </h1>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <h1
                  className={`${
                    selected
                      ? "text-version2-500 border-version2-500 border-b-2 font-bold"
                      : " text-neutral-400"
                  } text-sm pb-2 transition-all ease-in-out duration-75`}
                >
                  Pelatihan Mengulang
                </h1>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <TrainingContractTab />
            </Tab.Panel>
            <Tab.Panel>
              <RepeatTrainingTab />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </section>
  );
};

export default TrainingDraftPage;
