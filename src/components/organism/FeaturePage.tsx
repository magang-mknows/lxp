"use client";

import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement } from "react";
import LandingFooter from "../moleculs/LandingFooter";

import Breadcums from "../atoms/Breadcums";
import { FeaturesBreadCumbs } from "@/utils/const";
import FeaturesDesc from "../atoms/FeaturesDesc";
import FeaturesSearch from "../atoms/FeaturesSearch";
import FeaturesCards from "../atoms/FeaturesCards";
import { useRecoilValue } from "recoil";
import { FilteredFeatures } from "@/store/features";

import FeaturesNotFound from "../moleculs/FeaturesNotFound";

const Navbar = dynamic(() => import("../moleculs/Navbar"), {
  ssr: false,
});

const FeaturePage: FC = (): ReactElement => {
  const filteredFeatures = useRecoilValue(FilteredFeatures);

  return (
    <Fragment>
      <Navbar />
      <section className="pt-[74px] bg-neutral-100/70 min-h-screen">
        <Breadcums items={FeaturesBreadCumbs} />
        <FeaturesDesc />
        <FeaturesSearch />
        {filteredFeatures.length === 0 && <FeaturesNotFound />}

        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 md:px-14 lg:px-16 gap-6 md:gap-8 pb-20 md:pb-32 lg:pb-40">
          {filteredFeatures.map(({ desc, title, srcImg, isAvailable }, index) => {
            return (
              <FeaturesCards
                key={index}
                desc={desc}
                title={title}
                srcImg={srcImg}
                isAvailable={isAvailable}
              />
            );
          })}
        </section>
      </section>

      <LandingFooter />
    </Fragment>
  );
};

export default FeaturePage;
