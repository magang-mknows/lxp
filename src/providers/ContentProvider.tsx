"use client";

import { BottomNavMenu } from "@/utils/const";
import { usePathname } from "next/navigation";
import { FC, ReactElement, Suspense } from "react";
import ClienProvider from "./ClientProvider";
import { TProviderProps } from "./types";
import Navbar from "@/components/moleculs/Navbar";
import BottomMenu from "@/components/atoms/BottomMenu";
import ContentFooter from "@/components/moleculs/ContentFooter";
import Modal from "@/components/atoms/Modal";
import LoginForm from "@/components/moleculs/LoginForm";
import { useLoginPopup } from "@/modules/auth/hooks/Login/usePopupLogin";

const ContentProvider: FC<TProviderProps> = ({ children }): ReactElement => {
  const pathname = usePathname() as unknown as string;
  const bottomMenuLink = BottomNavMenu.map((menu) => {
    return menu.link;
  });

  const { getLoginPopup, setLoginPopup } = useLoginPopup();

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
      <Modal withClose hasImage lookup={getLoginPopup} onClose={() => setLoginPopup(false)}>
        <Suspense>
          <LoginForm />
        </Suspense>
      </Modal>
    </ClienProvider>
  );
};

export default ContentProvider;
