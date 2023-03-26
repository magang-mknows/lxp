import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement } from "react";
import AboutHero from "../moleculs/AboutHero";
import AboutJobs from "../moleculs/AboutJobs";
import AboutTestimonials from "../moleculs/AboutTestimonials";
import LandingFooter from "../moleculs/LandingFooter";

const Navbar = dynamic(() => import("../moleculs/Navbar"), {
  ssr: false,
});

const AboutPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <section className="pt-[74px] bg-neutral-100">
        <AboutHero />
        <AboutTestimonials />
        <AboutJobs />
        <LandingFooter />
      </section>
    </Fragment>
  );
};

export default AboutPage;
