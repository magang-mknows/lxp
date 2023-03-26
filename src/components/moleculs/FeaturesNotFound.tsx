import { useUserSearch } from "@/hooks/features/useUserSearch";
import { FilteredFeatures } from "@/store/features";
import Image from "next/image";
import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";

const FeaturesNotFound = () => {
  const { getUserSearch } = useUserSearch();
  const filteredFeatures = useRecoilValue(FilteredFeatures);

  return (
    <Fragment>
      {filteredFeatures.length === 0 && (
        <div className="flex justify-center flex-col -mt-2 items-center w-full">
          <Image
            src={`/assets/features/notFound.svg`}
            alt="nofound-view"
            className=" w-52 h-52 md:w-56 lg:w-60 md:h-56 lg:h-60 relative "
            height={10}
            width={10}
            loading="eager"
          />
          <h1 className="text-sm">
            Yah.. Saat ini fitur <span className="font-bold">`{getUserSearch}`</span> belum
            tersedia,
          </h1>
          <h1 className="text-sm"> tunggu kabar dari kami ya!</h1>
        </div>
      )}
    </Fragment>
  );
};

export default FeaturesNotFound;
