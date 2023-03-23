"use client";

import "./globals.css";
import RecoilProvider from "@/providers/RecoilProvider";
import QueryProvider from "@/providers/QueryProvider";
import ApiService from "@/services/api";
import { ThemeProvider } from "next-themes";

ApiService.init("https://randomuser.me/api/");

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
