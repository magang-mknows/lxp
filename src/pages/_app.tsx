import "@/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import { ReactElement, useEffect, useState } from "react";
import { Source_Sans_Pro } from "next/font/google";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

import { Montserrat } from "next/font/google";
import SpinerLoading from "@/components/atoms/SpinerLoading";
import { SessionProvider } from "next-auth/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

// ApiService.init(configs.apiURL);

// if (typeof window !== "undefined" && !!TokenService.getToken()) {
//   if (TokenService.getToken()) {
//     ApiService.setHeader();
//   } else {
//     ApiService.removeHeader();
//   }
// }

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <SpinerLoading />;

  return (
    // <SuspenseError>
    //   <ToastContainer />
    //   <ThemeProvider>
    //     <QueryClientProvider client={queryClient}>
    //       <QueryErrorResetBoundary>
    //         <SessionProvider session={session}>
    //           <RecoilRoot>
    //             <style jsx global>{`
    //               html {
    //                 font-family: ${montserrat.style.fontFamily};
    //               }
    //             `}</style>
    //             <Component {...pageProps} />
    //           </RecoilRoot>
    //         </SessionProvider>
    //       </QueryErrorResetBoundary>
    //     </QueryClientProvider>
    //   </ThemeProvider>
    // </SuspenseError>
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <RecoilRoot>
          <main className={montserrat.className}>
            <Component {...pageProps} />
          </main>
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
}
