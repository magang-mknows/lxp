import { useRecoilState } from "recoil";
import { popupGetUser } from "../store";
import { leaderBoardRankProps } from "../store/type";

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
