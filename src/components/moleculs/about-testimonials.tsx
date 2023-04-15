import { FC, Fragment, ReactElement } from "react";
import AboutTagline from "../atoms/about-tagline";
import AboutTestimonialsCard from "../atoms/about-testimonials-card";

const AboutTestimonials: FC = (): ReactElement => {
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
      <AboutTagline />
      <section className="mb-4 md:mb-8 lg:mb-10 w-full pb-4 -mt-10  px-8 md:px-14 lg:px-16 ">
        <section className=" flex gap-10 gap-y-20 w-[100%] overflow-visible scrollbar-hide overflow-x-scroll">
          {dummyTestimonials.map((testimoni, index) => {
            return (
              <AboutTestimonialsCard
                addtionalClass={`${(index + 1) % 2 !== 0 ? "bg-version2-400" : " bg-version2-500"}`}
                key={index}
                title={testimoni.name}
                subTitle={testimoni.position}
                desc={testimoni.desc}
                srcImg={testimoni.srcImg}
              />
            );
          })}
        </section>
      </section>
    </Fragment>
  );
};

export default AboutTestimonials;
