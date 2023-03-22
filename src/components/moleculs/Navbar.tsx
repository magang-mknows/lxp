import React from "react";
import NavbarAskMenu from "../atoms/NavbarAskMenu";
import NavbarFeatureMenu from "../atoms/NavbarFeatureMenu";
import CompanyLogo from "../atoms/CompanyLogo";
import NavButton from "../atoms/Button";
import NavbarMenu from "../atoms/NavbarMenu";
import NavbarThemeOption from "../atoms/NavbarThemeOption";

const Navbar = () => {
  return (
    <nav className="bg-neautral-50 py-4 px-8 md:px-14 lg:px-16 flex justify-between items-center">
      <CompanyLogo />
      <div className="flex gap-4 items-center">
        <NavbarMenu />
        <NavbarAskMenu />
        <NavbarFeatureMenu />
        <NavbarThemeOption />
        <section className="lg:flex gap-4 hidden">
          <NavButton type="secondary" text="Masuk" size="small" />
          <NavButton type="primary" text="Daftar" size="small" />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
