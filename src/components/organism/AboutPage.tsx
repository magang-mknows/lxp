import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement } from "react";
import AboutTagline from "../atoms/AboutTagline";
import AboutTestimonials from "../atoms/AboutTestimonials";
import AboutHero from "../moleculs/AboutHero";
import LandingFooter from "../moleculs/LandingFooter";

const Navbar = dynamic(() => import("../moleculs/Navbar"), {
  ssr: false,
});

const AboutPage: FC = (): ReactElement => {
  const dummyTestimonials = [
    {
      name: "Andini",
      position: "CEO of Mandiri Syariah",
      desc: "M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.",
      srcImg: "/assets/about/person1.svg",
    },
    {
      name: "Syarief",
      position: "Marketing of BNI Syariah",
      desc: "M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.",
      srcImg: "/assets/about/person2.svg",
    },
  ];

  return (
    <Fragment>
      <Navbar />
      <section className="pt-[74px] bg-neutral-100">
        <AboutHero />
        <section className="grid grid-cols-1 lg:grid-cols-3 mb-20 pt-44 lg:pt-80 pb-4 lg:pb-20 px-8 md:px-14 lg:px-16 ">
          <section className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-20">
            {dummyTestimonials.map((testimoni, index) => {
              return (
                <AboutTestimonials
                  key={index}
                  title={testimoni.name}
                  subTitle={testimoni.position}
                  desc={testimoni.desc}
                  srcImg={testimoni.srcImg}
                />
              );
            })}
          </section>
          <AboutTagline />
        </section>
        <LandingFooter />
      </section>
    </Fragment>
  );
};

export default AboutPage;
