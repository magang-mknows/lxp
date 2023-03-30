"use client";
import { BottomNavMenu } from "@/utils/const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactElement } from "react";

const BottomMenu: FC = (): ReactElement => {
  const pathname = usePathname();

  return (
    <div className="bg-neutral-50 hidden border-b-2 border-t-2 border-neutral-100 py-3 w-full px-8 md:-px-14 lg:px-16 lg:flex gap-4">
      {BottomNavMenu.map((menu, index) => {
        return (
          <Link
            href={menu.link}
            key={index}
            className={`${
              pathname.includes(menu.link) &&
              "bg-version3-500 text-neutral-100 rounded-md shadow-sm cursor-pointer"
            }  px-2 py-2.5 text-sm`}
          >
            <p>{menu.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomMenu;
