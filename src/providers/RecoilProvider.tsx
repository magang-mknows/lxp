import { FC, ReactElement } from "react";
import { RecoilRoot } from "recoil";
import { TProviderProps } from "./types";

const RecoilProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
