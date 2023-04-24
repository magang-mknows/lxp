"use client";

import { FC, Fragment, ReactElement, lazy } from "react";

import Breadcums from "../atoms/Breadcums";
import { FeaturesBreadCumbs } from "@/utils/const";
import FeaturesDesc from "../atoms/FeaturesDesc";
import FeaturesSearch from "../atoms/FeaturesSearch";
import { useRecoilValue } from "recoil";

import FeaturesNotFound from "../moleculs/FeaturesNotFound";
import { FilteredFeatures } from "@/modules/features/store";
import SuspenseError from "@/providers/SuspenseError";
import CardLoading from "@/modules/features/loading/CardLoading";

const FeaturesCards = lazy(() => import("../atoms/FeaturesCards"));

const FeaturePage: FC = (): ReactElement => {
  const filteredFeatures = useRecoilValue(FilteredFeatures);

  return (
    <Fragment>
      <Breadcums items={FeaturesBreadCumbs} />
      <FeaturesDesc />
      <FeaturesSearch />
      {filteredFeatures.length === 0 && <FeaturesNotFound />}

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-8 md:px-14 lg:px-16 gap-6 md:gap-8 pb-20 md:pb-32 lg:pb-40">
        {filteredFeatures.map(({ desc, title, srcImg, isAvailable, link }, index) => {
          return (
            <SuspenseError loadingFallback={<CardLoading />} key={index}>
              <FeaturesCards
                link={link}
                desc={desc}
                title={title}
                srcImg={srcImg}
                isAvailable={isAvailable}
              />
            </SuspenseError>
          );
        })}
      </section>
    </Fragment>
  );
};

export default FeaturePage;
