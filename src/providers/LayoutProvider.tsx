import LandingFooter from "@/components/moleculs/LandingFooter";
import dynamic from "next/dynamic";
import { FC, ReactElement } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";

const Navbar = dynamic(() => import("@/components/moleculs/Navbar"), {
  ssr: true,
});

const LayoutProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  return (
    <ClienProvider>
      <Navbar />
      <section className="pt-[74px] bg-neutral-100">
        {children}
        <LandingFooter />
      </section>
    </ClienProvider>
  );
};

export default LayoutProvider;
