"use client";
import LeaderBoardModule from "@/modules/dashboard/leaderboard/LeaderBoardModule";
import { NextPage } from "next";
import React, { ReactElement } from "react";

const page: NextPage = (): ReactElement => {
  return <LeaderBoardModule />;
};

export default page;
