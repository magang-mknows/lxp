export type TDrillSimulationType = {
  schedule: Array<{
    date: string;
    time: Array<{
      title: string;
      value: Array<string>;
    }>;
  }>;
  ImgSrc: StaticImageData;
  lecture: string;
  category: string;
  title: string;
  location: string;
};
