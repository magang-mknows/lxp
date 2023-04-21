import Image from "next/image";
import React from "react";
import AboutDesc from "../atoms/AboutDesc";
import AboutTitle from "../atoms/AboutTitle";

const AboutHero = () => {
  return (
    <div className="px-8 md:px-14 relative lg:px-16 bg-center bg-cover  min-h-[80vh] grid grid-cols-1 lg:grid-cols-3 pt-20 lg:pt-4 shadow-md ">
      <div className="absolute left-0 right-0 top-0 w-[100wh] h-[80vh]">
        <Image
          alt="bg-hero"
          className="h-full -z-50 w-full object-cover"
          src={"/assets/about/aboutHeroImage.webp"}
          width={1500}
          height={1500}
          loading="eager"
        />
      </div>
      <AboutTitle />
      <AboutDesc />
    </div>
  );
};

export default AboutHero;
