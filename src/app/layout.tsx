"use client";

import "./globals.css";
import RecoilProvider from "@/providers/RecoilProvider";
import QueryProvider from "@/providers/QueryProvider";
import ApiService from "@/services/api";

ApiService.init("https://randomuser.me/api/");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <RecoilProvider>{children}</RecoilProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
