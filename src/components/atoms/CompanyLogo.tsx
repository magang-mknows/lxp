import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompanyLogo = () => {
  return (
    <Link href={"/"} passHref>
      <Image
        src={"/assets/navbar/logo.svg"}
        alt="M-Know Logo's"
        className="w-auto h-11"
        width={100}
        height={60}
        loading="eager"
        quality={40}
      />
    </Link>
  );
  // return <h1>Company Logo</h1>;
};

export default CompanyLogo;
