import { FC, ReactElement } from "react";
import HistoryCard from "./HistoryCard";
import LayoutProvider from "@/providers/LayoutProvider";
import Breadcums from "@/components/atoms/Breadcums";
import { myTrainingQuizBreadCumbs } from "@/utils/const";

const QuizHistory: FC = (): ReactElement => {
  return (
    <LayoutProvider>
      <Breadcums items={myTrainingQuizBreadCumbs} />
      <div className="px-6 md:px-8 lg:px-10 w-full min-h-screen my-20">
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </section>
      </div>
    </LayoutProvider>
  );
};

export default QuizHistory;
