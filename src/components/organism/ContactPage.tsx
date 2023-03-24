import dynamic from "next/dynamic";
import { FC, Fragment, ReactElement } from "react";
import ContactContainer from "../moleculs/ContactContainer";
import LandingFooter from "../moleculs/LandingFooter";

const Navbar = dynamic(() => import("../moleculs/Navbar"), {
  ssr: false,
});

const ContactPage: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <section className="pt-[74px] bg-neutral-100/70">
        <ContactContainer />
        <LandingFooter />
      </section>
    </Fragment>
  );
};

export default ContactPage;
