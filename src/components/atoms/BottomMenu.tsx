"use client";
import { BottomNavMenu } from "@/utils/const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactElement } from "react";

const BottomMenu: FC = (): ReactElement => {
  const pathname = usePathname() as unknown as string;

  return (
    <div className="bg-neutral-50 hidden border-b-2 border-t-2 border-neutral-100 py-3 w-full px-8 md:-px-14 lg:px-16 lg:flex gap-4">
      {BottomNavMenu.map((menu, index) => {
        return (
          <Link
            href={menu.link}
            key={index}
            className={`${
              pathname.includes(menu.link)
                ? "bg-version3-500 text-neutral-100 hover:text-neutral-50 rounded-md shadow-sm cursor-pointer 0"
                : "hover:text-version3-500 "
            }  px-4 py-2.5 text-sm transition-all ease-in-out duration-300`}
          >
            <p>{menu.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomMenu;
