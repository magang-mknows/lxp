import { ReactNode } from "react";

export type videoGuideTypes = {
  videoId?: string;
  titleVideo?: string;
  descVideo?: string;
  imgVideo?: ReactNode | string;
};

export type DictionaryType = {
  id?: string;
  title?: string;
  description?: string;
  slug?: string;
};
