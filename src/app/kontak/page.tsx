import ContactModule from "@/modules/contact";
import { NextPage } from "next";
import { ReactElement } from "react";

export const metadata = {
  title: "Kontak | LXP App",
  description:
    "Jl. Raya Cirendeu No.59, Cireundeu, Kec. Ciputat Timur., Kota Tangerang Selatan, Banten 15419, Kampus Gratis, LXP, M-Knows Consulting",
};

const ContactUs: NextPage = (): ReactElement => {
  return <ContactModule />;
};

export default ContactUs;
