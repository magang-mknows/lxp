import { ForgotPasswordPopupState, LoginPopupState } from "@/store/Login";
import { useRecoilState } from "recoil";

type ReturnTypes = { getForgotPopup: boolean; setForgotPopup: (val: boolean) => void };

export const useForgotPopup = (): ReturnTypes => {
  const [get, set] = useRecoilState(ForgotPasswordPopupState);
  return {
    getForgotPopup: get,
    setForgotPopup: (val: boolean) => set(val),
  };
};
