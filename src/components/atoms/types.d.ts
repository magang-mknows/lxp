import { ReactNode } from "react";

export type TButtonProps = {
  type: "primary" | "secondary";
  text: string;
  size: "w-24" | "w-28" | "w-20" | string;
  icon?: ReactNode;
};

export type TImageIDProps = {
  id: number;
  date?: string;
};

export type TCardContentProps = {
  title: string;
  desc: string;
};
