import { useRecoilState } from "recoil";
import { tabAssigmentState } from "./store";

type ReturnTypes = { getTabAssigment: string; setTabAssigment: (val: string) => void };

export const useBaunennen = (): ReturnTypes => {
  const [get, set] = useRecoilState(tabAssigmentState);
  return {
    getTabAssigment: get,
    setTabAssigment: (val: string) => set(val),
  };
};
