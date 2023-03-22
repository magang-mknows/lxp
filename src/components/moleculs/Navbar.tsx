import React from "react";
import NavbarAskMenu from "../atoms/NavbarAskMenu";
import NavbarFeatureMenu from "../atoms/NavbarFeatureMenu";
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
        <NavbarFeatureMenu />
        <NavbarThemeOption />
        <NavButton type="secondary" text="Masuk" size="small" />
        <NavButton type="primary" text="Daftar" size="small" />
      </div>
    </nav>
  );
};

export default Navbar;
