"use client";
import LeaderBoardModule from "@/modules/leaderboard/LeaderBoardModule";
import { NextPage } from "next";
import React, { ReactElement } from "react";

const page: NextPage = (): ReactElement => {
  return <LeaderBoardModule />;
};

export default page;
