"use client";
import { useLoginPopup } from "@/hooks/Login/usePopupLogin";
import dynamic from "next/dynamic";
import { FC, lazy, ReactElement, Suspense } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";
import LoginForm from "@/components/moleculs/LoginForm";
import Modal from "@/components/atoms/Modal";

const Navbar = dynamic(() => import("@/components/moleculs/Navbar"), {
  ssr: true,
});
const LandingFooter = lazy(() => import("@/components/moleculs/LandingFooter"));
const LayoutProvider: FC<TProviderProps> = ({ children, className }): ReactElement => {
  const { getLoginPopup, setLoginPopup } = useLoginPopup();

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
      <Modal withClose hasImage lookup={getLoginPopup} onClose={() => setLoginPopup(false)}>
        <Suspense>
          <LoginForm />
        </Suspense>
      </Modal>
    </ClienProvider>
  );
};

export default LayoutProvider;
