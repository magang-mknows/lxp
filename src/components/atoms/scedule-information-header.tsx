"use client";
import { FC, ReactElement } from "react";
import { TCardContentProps } from "./types";

const SceduleInformationHeader: FC<TCardContentProps> = ({
  title,
  subTitle,
  desc,
}): ReactElement => {
  return (
    <header className="mb-6">
      <h1 className="text-xl font-bold text-neutral-900 mb-1">{title}</h1>
      <p className="text-sm text-neutral-500 mb-1">{subTitle}</p>
      <p className="text-sm text-neutral-500">Lokasi : {desc}</p>
    </header>
  );
};

export default SceduleInformationHeader;
