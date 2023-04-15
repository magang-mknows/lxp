import { FC, ReactElement } from "react";

const LandingFooterContact: FC = (): ReactElement => {
  return (
    <div className=" text-neutral-900">
      <h1 className="mb-3 lg:mb-6 font-black text-base">Kontak</h1>
      <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
        <li>+62 2143 1244</li>
        <li>lmsmknows@gmail.com</li>
      </ul>
    </div>
  );
};

export default LandingFooterContact;
