import ContactLoading from "@/modules/contact/loading";
import SuspenseError from "@/providers/SuspenseError";
import { FC, ReactElement, lazy } from "react";

const ContactContainer = lazy(() => import("../moleculs/ContactContainer"));

const ContactPage: FC = (): ReactElement => {
  return (
    <section className=" bg-neutral-100/70 min-h-[100vh]">
      <SuspenseError loadingFallback={<ContactLoading />}>
        <ContactContainer />
      </SuspenseError>
    </section>
  );
};

export default ContactPage;
