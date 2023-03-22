import { FC, Fragment, ReactElement } from "react";

const NavbarMenu: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="lg:flex gap-4 hidden">
        <p className="text-sm">About us</p>
        <p className="text-sm">Contact us</p>
      </div>
    </Fragment>
  );
};

export default NavbarMenu;
