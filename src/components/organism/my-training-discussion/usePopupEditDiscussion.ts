import { useRecoilState } from "recoil";
import { PopupModalEditDiscussion } from "./type";

type ReturnTypes = {
  setPopupEditStatus: (val: boolean) => void;
  getPopupEditStatus: boolean;
};

export const usePopupEditDiscussion = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalEditDiscussion);
  return {
    setPopupEditStatus: (val: boolean) => set(val),
    getPopupEditStatus: get,
  };
};
