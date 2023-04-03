import dynamic from "next/dynamic";
import { FC, ReactElement } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";
import LandingFooter from "@/components/moleculs/LandingFooter";

const Navbar = dynamic(() => import("@/components/moleculs/Navbar"), {
  ssr: true,
});

const LayoutProvider: FC<TProviderProps> = ({ children, className }): ReactElement => {
  return (
    <ClienProvider>
      <Navbar />
      <section className={`pt-[74px] bg-neutral-100 ${className}`}>
        {children}
        <LandingFooter />
      </section>
    </ClienProvider>
  );
};

export default LayoutProvider;
