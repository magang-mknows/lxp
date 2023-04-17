import { FC, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SpinerLoading from "@/components/atoms/SpinerLoading";
import { SuspenseErrorProps } from "./types";

const SuspenseError: FC<SuspenseErrorProps> = ({
  loadingFallback = <SpinerLoading />,
  errorFallback = (
    <span className="text-warning-500 h-full w-full grid place-items-center text-sm">
      Error was happen
    </span>
  ),
  children,
}): ReactElement => {
  return (
    <Suspense fallback={loadingFallback}>
      <ErrorBoundary fallback={<>{errorFallback}</>}>{children}</ErrorBoundary>
    </Suspense>
  );
};

export default SuspenseError;
