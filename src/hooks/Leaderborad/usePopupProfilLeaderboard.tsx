import { PopupProfilLeaderboard } from "@/store/Leaderboard";
import { useRecoilState } from "recoil";

type ReturnTypes = {
  getPopupLeaderboardStatus: boolean;
  setPopupLeaderboardStatus: (val: boolean) => void;
};

export const usePopupProfilLeaderboard = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupProfilLeaderboard);
  return {
    getPopupLeaderboardStatus: get,
    setPopupLeaderboardStatus: (val: boolean) => set(val),
  };
};
