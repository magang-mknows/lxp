import React from "react";
import NavbarAskMenu from "../atoms/NavbarAskMenu";
import FeatureMenu from "../atoms/FeatureMenu";
import NavbarLogo from "../atoms/NavbarLogo";
import NavButton from "../atoms/Button";
import NavbarMenu from "../atoms/NavbarMenu";
import NavbarThemeOption from "../atoms/NavbarThemeOption";

const Navbar = () => {
  return (
    <nav className="bg-neautral-50 py-4 px-16 flex justify-between items-center">
      <NavbarLogo />
      <div className="flex gap-4 items-center">
        <NavbarMenu />
        <NavbarAskMenu />
        <FeatureMenu />
        <NavbarThemeOption />
        <NavbarMenu />
        <NavbarAskMenu />
        <FeatureMenu />
        <NavbarThemeOption />
        <NavButton type="secondary" text="Masuk" size="w-24" />
        <NavButton type="primary" text="Daftar" size="w-24" />
      </div>
    </nav>
  );
};

export default Navbar;
