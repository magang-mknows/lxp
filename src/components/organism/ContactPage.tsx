import { FC, ReactElement } from "react";
import ContactContainer from "../moleculs/ContactContainer";

const ContactPage: FC = (): ReactElement => {
  return (
    <section className=" bg-neutral-100/70">
      <ContactContainer />
    </section>
  );
};

export default ContactPage;
