import ContentFooter from "@/components/moleculs/ContentFooter";
import dynamic from "next/dynamic";
import { FC, ReactElement } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";

const Navbar = dynamic(() => import("../components/moleculs/Navbar"), {
  ssr: false,
});

const ContentProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  return (
    <ClienProvider>
      <Navbar />
      <section className="pt-[74px] bg-neutral-100">
        {children}
        <ContentFooter />
      </section>
    </ClienProvider>
  );
};

export default ContentProvider;
