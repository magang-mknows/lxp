import { ReactElement } from "react";
import PrivateInformationAccordion from "../PrivateInformationAccordion";
import Card from "@/components/atoms/Card";

const index = (): ReactElement => {
  return (
    <div className="mt-[40px] ">
      <div className="flex justify-center">
        <Card hasImage={false} className={"bg-[#FFFF] rounded-[8px] md:w-[95%] w-full"}>
          <div className="w-full relative">
            <PrivateInformationAccordion />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default index;
