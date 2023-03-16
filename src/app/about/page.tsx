"use client";

import { atom, useRecoilValue } from "recoil";
import { useFetchAllTest } from "@/hooks/test/useFetchAllTest";
import { Fragment } from "react";

const TestAtom = atom({
  key: "test",
  default: "Anjay mabar",
});

export default function About() {
  const { data } = useFetchAllTest();
  const getTestAtom = useRecoilValue(TestAtom);
  return (
    <Fragment>
      <span className="text-green-400 text-9xl">{getTestAtom}</span>;
      <span>{data?.results.map((item) => item.email)}</span>
    </Fragment>
  );
}
