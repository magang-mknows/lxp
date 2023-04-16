import { useRecoilState } from "recoil";
import { videoGuideState } from "../store";
import { videoGuideTypes } from "../store/type";

type GuideVideo = {
  setGuideVideo: (val: Array<videoGuideTypes>) => void;
  getGuideVideo: Array<videoGuideTypes>;
};

export const useGuideVideo = (): GuideVideo => {
  const [get, set] = useRecoilState(videoGuideState);
  return {
    setGuideVideo: (val: Array<videoGuideTypes>) => set(val),
    getGuideVideo: get,
  };
};
