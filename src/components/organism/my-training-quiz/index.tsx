import { FC, ReactElement, lazy } from "react";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/Breadcums";
import { myTrainingQuizBreadCumbs } from "@/utils/const";

const QuizHome = lazy(() => import("./QuizHome"));

const QuizHomePage: FC = (): ReactElement => {
  return (
    <LayoutProvider>
      <Breadcums items={myTrainingQuizBreadCumbs} />
      <QuizHome />
    </LayoutProvider>
  );
};

export default QuizHomePage;
