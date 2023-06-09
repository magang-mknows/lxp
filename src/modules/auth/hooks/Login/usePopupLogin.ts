import { LoginPopupState } from "@/modules/auth/store";
import { useRecoilState } from "recoil";

type ReturnTypes = { getLoginPopup: boolean; setLoginPopup: (val: boolean) => void };

export const useLoginPopup = (): ReturnTypes => {
  const [get, set] = useRecoilState(LoginPopupState);
  return {
    getLoginPopup: get,
    setLoginPopup: (val: boolean) => set(val),
  };
};
