import { popupGetUser } from "@/modules/leaderboard/store";
import { leaderBoardRankProps } from "@/modules/leaderboard/store/type";
import { useRecoilState } from "recoil";

type ReturnTypes = {
  setPopupUser: (val: leaderBoardRankProps) => void;
  getPopupUser: leaderBoardRankProps;
};

export const usePopupGetUser = (): ReturnTypes => {
  const [get, set] = useRecoilState(popupGetUser);
  return {
    setPopupUser: (val: leaderBoardRankProps) => set(val),
    getPopupUser: get,
  };
};
