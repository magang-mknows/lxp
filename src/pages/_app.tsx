import "@/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import { ReactElement, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

import { Montserrat } from "next/font/google";
import SuspenseError from "@/providers/SuspenseError";
import SpinerLoading from "@/components/atoms/SpinerLoading";
import configs from "@/configs";
import ApiService from "@/modules/service/api";
import TokenService from "@/modules/service/token";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

ApiService.init(configs.apiURL);

if (typeof window !== "undefined" && !!TokenService.getToken()) {
  if (TokenService.getToken()) {
    ApiService.setHeader();
  } else {
    ApiService.removeHeader();
  }
}

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <SpinerLoading />;

  return (
    <SuspenseError>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
            <RecoilRoot>
              <style jsx global>{`
                html {
                  font-family: ${montserrat.style.fontFamily};
                }
              `}</style>
              <Component {...pageProps} />
            </RecoilRoot>
          </QueryErrorResetBoundary>
        </QueryClientProvider>
      </ThemeProvider>
    </SuspenseError>
  );
}
