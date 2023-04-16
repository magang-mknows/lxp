"use client";
import React, { FC, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import Description from "./Description";
import ListVideo from "./ListVideo";
import YoutubeSection from "./YoutubeSection";
import { filterOption } from "@/modules/Guide/store";
import { usePathname } from "next/navigation";
type param = {
  type: string;
};
const ContentSection: FC = (): ReactElement => {
  const pathName = usePathname();
  const videoId = pathName.split("/");
  const getOption = useRecoilValue(filterOption(videoId[videoId.length - 1]));
  console.log(videoId);
  return (
    <div className="w-full px-6 md:px-8 lg:px10 my-[68px]">
      {getOption.map((item, index) => {
        return (
          <div key={index} className="lg:flex gap-[68px] xl:flex-nowrap lg:flex-wrap">
            <div className="w-full">
              <YoutubeSection videoId={item.videoId} />
              <Description titleVideo={item.titleVideo} descVideo={item.descVideo} />
            </div>
            <div className="w-full">
              <ListVideo />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
