import { atom } from "recoil";

export const selectedArticle = atom({
  key: "selectedArticle",
  default: 1,
});

const now = new Date();

export const selectedDate = atom({
  key: "selectedDate",
  default: now,
});
