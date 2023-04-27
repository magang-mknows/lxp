import Breadcums from "@/components/atoms/Breadcums";
import QuizHistory from "@/components/organism/my-training-quiz/AfterQuiz/QuizHistory";
import LayoutProvider from "@/providers/LayoutProvider";
import { myTrainingQuizBreadCumbs } from "@/utils/const";
import React from "react";

const MyTrainingQuizStartModule = () => {
  return (
    <LayoutProvider>
      <Breadcums items={myTrainingQuizBreadCumbs} />
      <QuizHistory />
    </LayoutProvider>
  );
};

export default MyTrainingQuizStartModule;
