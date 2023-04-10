"use client";
import ContactLoading from "@/modules/contact/ContactLoading";
import dynamic from "next/dynamic";
import { FC, ReactElement, Suspense } from "react";

const ContactContainer = dynamic(() => import("../moleculs/ContactContainer"), {
  ssr: false,
});

const ContactPage: FC = (): ReactElement => {
  return (
    <section className=" bg-neutral-100/70 min-h-[100vh]">
      <Suspense fallback={<ContactLoading />}>
        <ContactContainer />
      </Suspense>
    </section>
  );
};

export default ContactPage;
