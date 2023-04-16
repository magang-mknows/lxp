import { useRecoilState } from "recoil";
import { LeaderboardRankState } from "../store";
import { leaderBoardRankProps } from "../store/type";

type leaderBoardRankTypes = {
  setRank: (val: Array<leaderBoardRankProps>) => void;
  getRank: Array<leaderBoardRankProps>;
};

export const useRankLeaderboard = (): leaderBoardRankTypes => {
  const [get, set] = useRecoilState(LeaderboardRankState);
  return {
    setRank: (val: Array<leaderBoardRankProps>) => set(val),
    getRank: get,
  };
};
