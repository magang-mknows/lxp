import { FC, ReactElement } from "react";
import CompanyLogo from "../atoms/CompanyLogo";
import ContactForm from "./ContactForm";
import ContactInformation from "../atoms/ContactInformation";

const ContactContainer: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 lg:px-16 flex py-14 justify-center">
      <div className="bg-neutral-50 px-8 md:px-10 lg:px-10 xl:px-20 max-w-[1200px] py-10 md:py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2">
        <section>
          <section className=" flex justify-center">
            <CompanyLogo />
          </section>
          <ContactInformation />
        </section>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
