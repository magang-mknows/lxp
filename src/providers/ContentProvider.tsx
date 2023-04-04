"use client";

import ContentFooter from "@/components/moleculs/ContentFooter";
import { BottomNavMenu } from "@/utils/const";
import { usePathname } from "next/navigation";
import { FC, lazy, ReactElement, Suspense } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";

const Navbar = lazy(() => import("../components/moleculs/Navbar"));
const BottomMenu = lazy(() => import("../components/atoms/BottomMenu"));

const ContentProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  const pathname = usePathname();
  const bottomMenuLink = BottomNavMenu.map((menu) => {
    return menu.link;
  });

  return (
    <ClienProvider>
      <Suspense>
        <Navbar />
      </Suspense>
      <section className="pt-[74px] bg-neutral-100 ">
        {bottomMenuLink.includes(pathname) && <BottomMenu />}
        {children}
        <ContentFooter />
      </section>
    </ClienProvider>
  );
};

export default ContentProvider;
