import { atom } from "recoil";

export const LoginPopupState = atom<boolean>({
  key: "login-modal-state",
  default: false,
});
