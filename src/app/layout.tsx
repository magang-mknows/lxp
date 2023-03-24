"use client";

import "./globals.css";
import RecoilProvider from "@/providers/RecoilProvider";
import QueryProvider from "@/providers/QueryProvider";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ThemeProvider attribute="class" enableSystem={true} disableTransitionOnChange>
            <RecoilProvider>{children}</RecoilProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
