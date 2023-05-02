import { MobileNavbarState } from "@/modules/navbar/store";
import { FC, ReactElement, Suspense } from "react";
import { useRecoilState } from "recoil";
import Modal from "./Modal";
import LoginForm from "../moleculs/LoginForm";
import { useLoginPopup } from "@/modules/auth/hooks/Login/usePopupLogin";
import Link from "next/link";
import { useSession } from "next-auth/react";
const genericHamburgerLine =
  "h-[2.5px] w-5 my-[2.5px] rounded-full bg-neutral-700 dark:bg-white stroke-neutral-800 transition ease transform duration-300";

const NavbarMobileMenu: FC = (): ReactElement => {
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);
  const { getLoginPopup, setLoginPopup } = useLoginPopup();

  const { data: session } = useSession();

  return (
    <div className="lg:hidden">
      <button
        name="mobile-menu"
        id="mobile-menu"
        aria-label="mobile-menu"
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
          <li className="w-full border-b-[0.5px] border-b-neutral-200 text-neutral-900 hover:text-version3-500 cursor-pointer py-4 text-center transition-colors ease-in-out duration-300">
            About us
          </li>
          <li className="w-full border-b-[0.5px] border-b-neutral-200 text-neutral-900 hover:text-version3-500 cursor-pointer py-4 text-center transition-colors ease-in-out duration-300">
            Contact us
          </li>
          {!session ? (
            <>
              <li
                onClick={() => {
                  setLoginPopup(true);
                }}
                className="w-full border-b-[0.5px] border-b-neutral-200 text-neutral-50 cursor-pointer py-4 text-center bg-version3-500 hover:bg-version2-300  transition-colors ease-in-out duration-300 "
              >
                Masuk
              </li>
              <li className="w-full border-b-[0.5px] border-b-neutral-200 text-neutral-900 hover:text-version3-500 cursor-pointer py-4 text-center transition-colors ease-in-out duration-300 ">
                <Link href={"/daftar"}>Daftar</Link>
              </li>
            </>
          ) : null}
        </ul>
      </section>
      <Modal withClose hasImage lookup={getLoginPopup} onClose={() => setLoginPopup(false)}>
        <Suspense>
          <LoginForm />
        </Suspense>
      </Modal>
    </div>
  );
};

export default NavbarMobileMenu;
