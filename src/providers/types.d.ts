import { ReactNode } from "react";

export type TProviderProps = {
  children: ReactNode;
  className?: string;
};

export type SuspenseErrorProps = {
  errorFallback?: ReactNode;
  loadingFallback?: ReactNode;
  children: ReactNode;
};
