import { FC, Fragment, ReactElement } from "react";

const NavbarMenu: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="lg:flex gap-4 hidden">
        <p className="text-sm text-neutral-900 hover:text-version3-500 ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-4">
          About us
        </p>
        <p className="text-sm text-neutral-900 hover:text-version3-500 ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-4">
          Contact us
        </p>
      </div>
    </Fragment>
  );
};

export default NavbarMenu;
