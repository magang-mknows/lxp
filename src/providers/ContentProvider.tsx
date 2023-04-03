"use client";

import ContentFooter from "@/components/moleculs/ContentFooter";
import { BottomNavMenu } from "@/utils/const";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { FC, ReactElement, Suspense } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";

const Navbar = dynamic(() => import("../components/moleculs/Navbar"), {
  ssr: false,
});
const BottomMenu = dynamic(() => import("../components/atoms/BottomMenu"), {
  ssr: false,
});

const ContentProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  const pathname = usePathname();
  const bottomMenuLink = BottomNavMenu.map((menu) => {
    return menu.link;
  });

  return (
    <ClienProvider>
      <Navbar />
      <section className="pt-[74px] bg-neutral-100 ">
        {bottomMenuLink.includes(pathname) && <BottomMenu />}
        {children}
        <ContentFooter />
      </section>
    </ClienProvider>
  );
};

export default ContentProvider;
