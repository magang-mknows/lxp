import { FC, ReactElement, ReactNode } from "react";

type TLayoutProps = {
  children: ReactNode;
};

const AboutLayout: FC<TLayoutProps> = ({ children }): ReactElement => {
  return <div className="flex items-center w-full h-screen">{children}</div>;
};

export default AboutLayout;
