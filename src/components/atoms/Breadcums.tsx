import Link from "next/link";
import { FC, ReactElement } from "react";
import { TBreadCrumbProps } from "./types";

const Breadcums: FC<TBreadCrumbProps> = ({ items }): ReactElement => {
  return (
    <section className=" px-8 md:px-14 lg:px-16 py-8 text-sm font-[600]">
      <ul className="inline-flex space-x-1 md:space-x-3">
        <li>
          {items.map((crumb, index) => {
            const isLastItem = index === items.length - 1;
            if (!isLastItem) {
              return (
                <section key={index} className="inline">
                  <Link href={crumb.link} className="inline-flex items-center text-version3-200">
                    {crumb.name}
                  </Link>
                  <span className="px-3 text-neutral-400 font-[600]">{">"}</span>
                </section>
              );
            } else {
              return (
                <span className="text-neutral-400 cursor-pointer" key={index}>
                  {crumb.name}
                </span>
              );
            }
          })}
        </li>
      </ul>
    </section>
  );
};

export default Breadcums;