import TrainingInformationModule from "@/modules/training-plan/training-information";
import api from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const TrainingInformation: NextPage = (): ReactElement => {
  return <TrainingInformationModule />;
};

export default TrainingInformation;
