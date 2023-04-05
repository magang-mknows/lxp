import { FC, lazy, ReactElement, Suspense } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";
import LandingFooter from "@/components/moleculs/LandingFooter";

const Navbar = lazy(() => import("@/components/moleculs/Navbar"));
const LayoutProvider: FC<TProviderProps> = ({ children, className }): ReactElement => {
  return (
    <ClienProvider>
      <Suspense>
        <Navbar />
      </Suspense>
      <section className={`pt-[74px] bg-neutral-100 ${className}`}>
        {children}
        <LandingFooter />
      </section>
    </ClienProvider>
  );
};

export default LayoutProvider;
