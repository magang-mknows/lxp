import React from "react";
import Question from "./Question";
import Count from "./Count";

const QuizStartPage = () => {
  return (
    <div className="mx-8 md:mx-14 lg:mx-16 bg-[#FFFF] mt-10 rounded-md">
      <div className="flex px-[32px] py-[52px] lg:gap-[52px]">
        <Question />
        <Count />
      </div>
    </div>
  );
};

export default QuizStartPage;
