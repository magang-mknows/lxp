import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Fragment, ReactElement } from "react";

const NavbarMenu: FC = (): ReactElement => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === "/" || pathname === "/tentang" || pathname === "/kontak"
          ? "lg:flex hidden"
          : "hidden"
      }  gap-4  mr-2`}
    >
      <Link href={"/tentang"} passHref>
        <p className="text-sm text-neutral-900  hover:text-version3-500 ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-4">
          About us
        </p>
      </Link>
      <Link href={"/kontak"} passHref>
        <p className="text-sm text-neutral-900 hover:text-version3-500 ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-4">
          Contact us
        </p>
      </Link>
    </div>
  );
};

export default NavbarMenu;
