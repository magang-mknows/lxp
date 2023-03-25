import Image from "next/image";
import { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const FeaturesSearch: FC = (): ReactElement => {
  return (
    <section className="mx-8 md:mx-14 lg:mx-72 xl:mx-80 px-4 py-3 flex items-center gap-2 bg-neutral-200 rounded-md mb-10 md:mb-14 lg:mb-16 xl:mb-20 relative">
      <AiOutlineSearch className="text-neutral-400 text-lg" />
      <input
        type="text"
        placeholder="Cari Fitur"
        className="text-neutral-900 z-50 relative text-sm bg-primary-100/0 w-full outline-none rounded-md"
      />
      <Image
        src={`/assets/features/circle1.svg`}
        alt="feature-view"
        className="h-52 w-52 mb-2 absolute -top-28 -left-28 -z-40"
        height={30}
        width={30}
        loading="eager"
      />
      <Image
        src={`/assets/features/circle2.svg`}
        alt="feature-view"
        className="h-52 w-52 mb-2 -z-50 absolute -top-16 -right-24"
        height={30}
        width={30}
        loading="eager"
      />
    </section>
  );
};

export default FeaturesSearch;
