import Image from "next/image";
import React from "react";

const NavbarLogo = () => {
  return (
    <Image
      src={"/assets/navbar/logo.svg"}
      alt="M-Know Logo's"
      className="h-11"
      width={100}
      height={60}
      loading="eager"
      quality={40}
    />
  );
  // return <h1>Company Logo</h1>;
};

export default NavbarLogo;
