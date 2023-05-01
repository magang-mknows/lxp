import { atom } from "recoil";

export const searchKeyword = atom({
  key: "keyword",
  default: "",
});

export const showDetailTraining = atom({
  key: "show-detail-training",
  default: false,
});

export const TrainingConfirmPopup = atom({
  key: "confirm-training",
  default: false,
});
