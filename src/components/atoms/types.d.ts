import { ReactNode } from "react";

export type TButtonProps = {
  type: "primary" | "secondary";
  text: string;
  size: "tiny" | "small" | "medium" | "large" | "extraLarge";
  icon?: ReactNode;
};

export type TImageIDProps = {
  id: number;
  date?: string;
};

export type TCardContentProps = {
  title?: string;
  desc?: string;
};
