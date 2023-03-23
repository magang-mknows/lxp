import { MobileNavbarState } from "@/store/navbar";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
const genericHamburgerLine =
  "h-[2.5px] w-5 my-[2.5px] rounded-full bg-neutral-700 dark:bg-white stroke-neutral-800 transition ease transform duration-300";

const NavbarMobileMenu: FC = (): ReactElement => {
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);

  return (
    <div className="lg:hidden">
      <button
        className="flex flex-col bg-neutral-100    h-9 w-9  p-2 rounded-md justify-center items-center group lg:hidden"
        onClick={() => setMobileNavbar(!getMobileNavbar)}
      >
        <div
          className={`${genericHamburgerLine} ${
            getMobileNavbar && "rotate-[47deg] translate-y-1.5  opacity-100 "
          }`}
        />
        <div className={`${genericHamburgerLine} ${getMobileNavbar && "opacity-0"}`} />
        <div
          className={`${genericHamburgerLine} ${
            getMobileNavbar && "-rotate-[47deg] -translate-y-2 opacity-100 "
          }`}
        />
      </button>
      <section
        className={`${
          getMobileNavbar ? "absolute z-10 left-0 top-16 my-2 right-0" : "hidden"
        } bg-neutral-50 border-t-[0.5px] border-t-neutral-200`}
      >
        <ul className="flex flex-col  text-sm items-center">
          <li className="w-full border-b-[0.5px] border-b-neutral-200 text-neutral-900 hover:text-version3-500 cursor-pointer py-4 text-center">
            About us
          </li>
          <li className="w-full border-b-[0.5px] border-b-neutral-200 text-neutral-900 hover:text-version3-500 cursor-pointer py-4 text-center">
            Contact us
          </li>
          <li className="w-full border-b-[0.5px] border-b-neutral-200 text-neutral-50 cursor-pointer py-4 text-center bg-version3-500 hover:bg-version3-400 ">
            Masuk
          </li>
          <li className="w-full border-b-[0.5px] border-b-neutral-200 text-neutral-900 hover:text-version3-500 cursor-pointer py-4 text-center">
            Daftar
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NavbarMobileMenu;
