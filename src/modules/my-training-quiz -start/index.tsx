import Breadcums from "@/components/atoms/Breadcums";
import QuizStartPage from "@/components/organism/my-training-quiz/StartQuiz";
import LayoutProvider from "@/providers/LayoutProvider";
import { myTrainingQuizBreadCumbs } from "@/utils/const";
import React from "react";

const MyTrainingQuizStartModule = () => {
  return (
    <LayoutProvider>
      <Breadcums items={myTrainingQuizBreadCumbs} />
      <QuizStartPage />
    </LayoutProvider>
  );
};

export default MyTrainingQuizStartModule;
