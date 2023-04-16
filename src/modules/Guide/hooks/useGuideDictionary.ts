import { GuideDictionaryState } from "@/modules/Guide/store";
import { useRecoilState } from "recoil";
import { DictionaryType } from "../store/type";

type GuideDictionary = {
  setGuideDictionary: (val: Array<DictionaryType>) => void;
  getGuideDictionary: Array<DictionaryType>;
};

export const useGuideDictinoary = (): GuideDictionary => {
  const [get, set] = useRecoilState(GuideDictionaryState);
  return {
    setGuideDictionary: (val: Array<DictionaryType>) => set(val),
    getGuideDictionary: get,
  };
};
