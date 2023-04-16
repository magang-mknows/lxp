import "@/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import { ReactElement, Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <span>Loading...</span>;
  return (
    <Suspense fallback="Loading...">
      <ThemeProvider>
        <RecoilRoot>
          <style jsx global>{`
            html {
              font-family: ${montserrat.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </Suspense>
  );
}
