import { FC, ReactElement, useState, useEffect, startTransition } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { useTheme } from "next-themes";

import Icon from "./ThemeIcons";

const NavbarTheme: FC = (): ReactElement => {
  const options = [
    {
      text: "Dark",
      value: "dark",
      icon: <BsFillMoonStarsFill />,
    },
    {
      text: "Light",
      value: "light",
      icon: <BsSunFill />,
    },
    {
      text: "Auto",
      value: "system",
      icon: <RiComputerLine />,
    },
  ];

  const { setTheme } = useTheme();

  const changeTheme = (val: string): void => {
    startTransition(() => {
      setTheme(val);
    });
  };

  return (
    <Menu as="div" className="relative inline-block text z-50 ">
      <Menu.Button as="button" name="theme-option" aria-label="theme-option">
        <div className="bg-neutral-100  h-9 w-9 flex items-center justify-center  overflow-hidden rounded-md cursor-pointer group">
          <Icon />
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items className="absolute top-2 right-0 w-30 origin-top-right  overflow-hidden rounded-md bg-neutral-50 shadow-md">
          {options.map((option, index) => (
            <div key={index} className="border-b-[0.5px] border-neutral-200">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() =>
                      startTransition(() => {
                        changeTheme(option.value);
                      })
                    }
                    className={`${
                      active ? " bg-version3-500 hover:text-neutral-50 " : ""
                    } flex justify-between gap-2 w-full px-6 py-2 text-neutral-800 dark:text-white transition-all duration-300 ease-in-out dark:border-b-2 group dark:border-white/10 `}
                  >
                    {option.icon}
                    <span className="text-xs text-neutral-900 group-hover:text-neutral-100 ">
                      {option.text}
                    </span>
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarTheme;
