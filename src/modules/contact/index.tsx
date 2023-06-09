import ContactPage from "@/components/organism/ContactPage";
import LayoutProvider from "@/providers/LayoutProvider";
import { FC, ReactElement } from "react";

const ContactModule: FC = (): ReactElement => {
  return (
    <LayoutProvider>
      <ContactPage />
    </LayoutProvider>
  );
};

export default ContactModule;
