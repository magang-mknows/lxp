"use client";

import { Fragment, ReactElement, FC } from "react";
import { TProviderProps } from "./types";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const ClienProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  return (
    <div className={`${montserrat.className} max-w-screen-2xl container mx-auto`}>{children}</div>
  );
};

export default ClienProvider;
