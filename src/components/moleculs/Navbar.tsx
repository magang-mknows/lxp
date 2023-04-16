"use client";

import React from "react";
import NavbarAskMenu from "../atoms/NavbarAskMenu";
import NavbarFeatureMenu from "../atoms/NavbarFeatureMenu";
import CompanyLogo from "../atoms/CompanyLogo";
import NavButton from "../atoms/Button";
import NavbarMenu from "../atoms/NavbarMenu";
import NavbarMobileMenu from "../atoms/NavbarMobileMenu";
import dynamic from "next/dynamic";
import { useLoginPopup } from "@/modules/auth/hooks/Login/usePopupLogin";
import Link from "next/link";
import useWindowScroll from "@/modules/navbar/hook";

const NavbarThemeOption = dynamic(() => import("../atoms/NavbarThemeOption"), {
  ssr: false,
});

const Navbar = () => {
  const { isScrollY } = useWindowScroll();
  const { getLoginPopup, setLoginPopup } = useLoginPopup();

  return (
    <nav
      className={`${
        isScrollY === "onSticky"
          ? "fixed top-0 "
          : isScrollY === "onScroll"
          ? "absolute -top-10"
          : isScrollY === "onRender"
          ? "absolute top-0 "
          : ""
      } bg-neutral-50  fixed w-full top-0 z-50 py-[18px] px-6 md:px-14 lg:px-16 flex justify-between items-center transition-all ease-in-out duration-300`}
    >
      <CompanyLogo />
      <div className="flex gap-2 md:gap-3 lg:gap-4 items-center ">
        <NavbarMobileMenu />
        <NavbarMenu />
        <NavbarAskMenu />
        <NavbarFeatureMenu />
        <NavbarThemeOption />
        <section className="lg:flex gap-4 hidden">
          <NavButton
            type="secondary"
            text="Masuk"
            size="small"
            onClick={() => setLoginPopup(true)}
          />

          <Link href={"daftar"} passHref>
            <NavButton type="primary" text="Daftar" size="small" />
          </Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
