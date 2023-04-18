import { FC, ReactElement } from "react";

const DashboardCarouselLoading: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-200 animate-pulse min-h-[250px]  p-6 rounded-md shadow-sm">
      <div className="w-full">
        <div>
          <div className="w-full h-6 mb-3 bg-neutral-300 animate-pulse rounded-md"></div>
          <div className="w-[20%] h-4 mb-6 bg-neutral-300 animate-pulse rounded-md"></div>
          <div className="w-full h-28 mb-5 bg-neutral-300 animate-pulse rounded-md"></div>
          <div className="w-[40%] h-8  bg-neutral-300 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCarouselLoading;
