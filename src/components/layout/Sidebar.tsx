"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navigation } from "@/constants/sidebarItems";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleItemClick = () => {
    // Only close on mobile
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const isPathActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <aside
      className={`
      fixed top-0 left-0 h-full w-[250px] bg-white border-r border-[#E6EFF5]
      transform transition-transform duration-300 ease-in-out
      lg:transform-none
      ${!isOpen ? "-translate-x-full" : "translate-x-0"}
      z-50
    `}
    >
      {/* Logo */}
      <div className="h-[100px] flex items-center pl-[38px]">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={handleItemClick}
        >
          <span className="icon-[mingcute--task-fill] w-[35px] h-[35px]" />
          <p className="text-[25px] font-extrabold font-inter leading-none text-[#343C6A]">
            Soar Task
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-[10px]">
        {navigation.map((item) => {
          const isActive = isPathActive(item.href) && item.enabled;

          return (
            <div
              key={item.name}
              className={`flex items-center gap-4 pl-11 pr-6 h-[60px] transition-colors relative font-inter font-medium text-lg leading-none ${
                !item.enabled
                  ? "cursor-not-allowed text-[#B1B1B1]"
                  : isActive
                  ? "text-[#232323] font-medium before:absolute before:left-0 before:top-0 before:h-full before:w-[6px] before:rounded-r-[10px] before:bg-[#232323]"
                  : "text-[#B1B1B1] hover:bg-gray-50 cursor-pointer"
              }`}
            >
              {item.enabled ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-4 w-full"
                  onClick={handleItemClick}
                >
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px]"
                    style={{
                      filter: isActive
                        ? "none"
                        : "brightness(0) saturate(100%) invert(77%) sepia(0%) saturate(0%) hue-rotate(152deg) brightness(84%) contrast(85%)",
                    }}
                  />
                  <span>{item.name}</span>
                </Link>
              ) : (
                <>
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px]"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(77%) sepia(0%) saturate(0%) hue-rotate(152deg) brightness(84%) contrast(85%)",
                    }}
                  />
                  <span>{item.name}</span>
                </>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
