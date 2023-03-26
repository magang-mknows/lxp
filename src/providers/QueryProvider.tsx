import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactElement } from "react";
import { TProviderProps } from "./types";

const queryInit = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const QueryProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  return <QueryClientProvider client={queryInit}>{children}</QueryClientProvider>;
};

export default QueryProvider;
