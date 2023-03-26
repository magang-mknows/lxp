import React from "react";
import AboutDesc from "../atoms/AboutDesc";
import AboutTitle from "../atoms/AboutTitle";

const AboutHero = () => {
  return (
    <div className="bg-AboutHero bg-no-repeat px-8 md:px-14 lg:px-16 bg-center bg-cover  min-h-[80vh] grid grid-cols-1 lg:grid-cols-3 pt-20 lg:pt-4 shadow-md ">
      <AboutTitle />
      <AboutDesc />
    </div>
  );
};

export default AboutHero;
