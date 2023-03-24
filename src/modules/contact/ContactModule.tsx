import ContactPage from "@/components/organism/ContactPage";
import LandingPage from "@/components/organism/LandingPage";
import ClienProvider from "@/providers/ClientProvider";
import { FC, ReactElement } from "react";

const ContactModule: FC = (): ReactElement => {
  return (
    <ClienProvider>
      <ContactPage />
    </ClienProvider>
  );
};

export default ContactModule;
