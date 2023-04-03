import { useRecoilState } from "recoil";
import { selectedArticle } from "@/store/dashboard";
type ReturnTypes = {
  setSelectedArticle: (val: number) => void;
  getSelectedArticle: number;
};

export const useSelectedArticle = (): ReturnTypes => {
  const [getArticle, setArticle] = useRecoilState(selectedArticle);
  return {
    setSelectedArticle: (val: number) => setArticle(val),
    getSelectedArticle: getArticle,
  };
};
