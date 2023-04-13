import { LeaderboardRankState } from "@/store/Leaderboard";
import { leaderBoardRankProps } from "@/store/Leaderboard/type";
import { useRecoilState } from "recoil";

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
