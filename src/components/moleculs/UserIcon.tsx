import { FC, ReactElement, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import SpinerLoading from "../atoms/SpinerLoading";

const UserIcon: FC = (): ReactElement => {
  const UserMenu = [
    {
      icon: <RiDashboardFill className="text-version3-500 rounded-md" size={16} />,
      name: "dashboard",
    },
    {
      icon: <FaUserAlt className="text-version3-300 rounded-md" size={16} />,
      name: "Profile",
    },
    {
      icon: <RiSettings5Fill className="text-neutral-700 rounded-md" size={16} />,
      name: "Pengaturan",
    },
    {
      icon: <FiLogOut className="text-pink-400 rounded-md" size={16} />,
      name: "Logout",
    },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <SpinerLoading />;

  return (
    <>
      <Menu as="div" className={"relative inline-block text-left z-50 left-0 "}>
        <Menu.Button>
          <div className="bg-neutral-100 h-9 w-9 flex items-center justify-center  overflow-hidden rounded-md cursor-pointer group">
            <FaUserAlt />
          </div>
        </Menu.Button>

        <Transition
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease duration-300 transform"
          leaveFrom="opacity-100 translate-y-0"
        >
          <Menu.Items
            as="div"
            className="absolute top-2 right-0 w-30 origin-top-right  overflow-hidden rounded-md bg-neutral-100  shadow-lg"
          >
            <div className="w-[260px] px-4 py-3 flex items-center gap-3 border-b-2 border-neutral-200">
              <FaUserAlt />

              <section>
                <h1 className="text-sm text-neutral-900 dark:text-neubg-neutral-100">
                  Mario Silalahi
                </h1>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">user@jshdj.com</p>
              </section>
            </div>

            {UserMenu.map(({ icon, name }, index) => (
              <Menu.Item
                key={index}
                as="div"
                className={
                  "flex gap-3 items-center px-4 py-3 cursor-pointer hover:bg-neutral-200 transition-all duration-300 ease-in-out group:"
                }
              >
                {icon}
                <h1 className="text-[#171717] group:hover:text-neutral-100 text-xs text-center">
                  {name}
                </h1>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UserIcon;
