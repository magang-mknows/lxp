"use client";
import dynamic from "next/dynamic";
import { FC, lazy, ReactElement, Suspense } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";

const Navbar = dynamic(() => import("@/components/moleculs/Navbar"), {
  ssr: true,
});
const LandingFooter = lazy(() => import("@/components/moleculs/LandingFooter"));
const LayoutProvider: FC<TProviderProps> = ({ children, className }): ReactElement => {
  return (
    <ClienProvider>
      <Suspense>
        <Navbar />
      </Suspense>
      <section className={`pt-[74px] bg-neutral-100 ${className}`}>
        {children}
        <Suspense>
          <LandingFooter />
        </Suspense>
      </section>
    </ClienProvider>
  );
};

export default LayoutProvider;
