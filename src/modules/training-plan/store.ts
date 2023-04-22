import { atom } from "recoil";

export const showDetailTraining = atom({
  key: "show-detail-training",
  default: false,
});

export const TrainingConfirmPopup = atom({
  key: "confirm-training",
  default: false,
});
