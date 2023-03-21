import { FC, Fragment, ReactElement } from "react";

const NavbarMenu: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="flex gap-4">
        <p className="text-sm">About us</p>
        <p className="text-sm">Contact us</p>
      </div>
    </Fragment>
  );
};

export default NavbarMenu;