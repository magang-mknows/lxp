"use client";

import { BottomNavMenu } from "@/utils/const";
import { usePathname } from "next/navigation";
import { FC, ReactElement, Suspense } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";
import Navbar from "@/components/moleculs/Navbar";
import BottomMenu from "@/components/atoms/BottomMenu";
import ContentFooter from "@/components/moleculs/ContentFooter";

const ContentProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  const pathname = usePathname() as unknown as string;
  const bottomMenuLink = BottomNavMenu.map((menu) => {
    return menu.link;
  });

  return (
    <ClienProvider>
      <Suspense>
        <Navbar />
      </Suspense>
      <section className="pt-[74px] bg-neutral-100 ">
        {bottomMenuLink.includes(pathname) && (
          <Suspense>
            <BottomMenu />
          </Suspense>
        )}
        {children}
        <Suspense>
          <ContentFooter />
        </Suspense>
      </section>
    </ClienProvider>
  );
};

export default ContentProvider;
