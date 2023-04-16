import { FeaturesList } from "@/utils/const";
import { atom, selector } from "recoil";

export const UserSearchState = atom({
  key: "userSearchState",
  default: "",
});

export const FeaturesListState = atom({
  key: "FeaturesListState",
  default: FeaturesList,
});

export const FilteredFeatures = selector({
  key: "FilteredFeatures",
  get: ({ get }) =>
    get(FeaturesListState).filter((item) =>
      item.title.toLowerCase().includes(get(UserSearchState).toLowerCase()),
    ),
});
