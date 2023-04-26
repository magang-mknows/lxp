import { FC, ReactElement } from "react";

const QuestionLoading: FC = (): ReactElement => {
  return (
    <section className="px-8 md:px-14 lg:px-16 flex flex-wrap gap-6 justify-center mb-28">
      <div className="w-full h-14 bg-neutral-200 animate-pulse rounded-md"></div>
      <div className="w-full h-14 bg-neutral-200 animate-pulse rounded-md"></div>
      <div className="w-full h-14 bg-neutral-200 animate-pulse rounded-md"></div>
      <div className="w-full h-14 bg-neutral-200 animate-pulse rounded-md"></div>
    </section>
  );
};

export default QuestionLoading;
