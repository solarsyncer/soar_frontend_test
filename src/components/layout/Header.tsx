"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const { user, loading } = useApp();

  const getTitle = () => {
    switch (pathname) {
      case "/":
        return "Overview";
      case "/settings":
        return "Settings";
      default:
        return "Overview";
    }
  };

  // Profile avatar component to reduce repetition
  const ProfileAvatar = ({ size }: { size: number }) => {
    if (loading.user) {
      return (
        <div
          className={`w-[${size}px] h-[${size}px] bg-gray-200 rounded-full animate-pulse`}
        />
      );
    }

    return (
      <Image
        src={user?.avatar || "/images/avatar.png"}
        alt={user?.name || "Profile"}
        width={size}
        height={size}
        className={`w-[${size}px] h-[${size}px] rounded-full`}
      />
    );
  };

  return (
    <header className="h-[140px] md:h-[100px] bg-white flex flex-col justify-center gap-5 md:flex-row md:items-center md:justify-between px-6 fixed top-0 right-0 left-0 lg:left-[250px] border-b border-border z-40">
      <div className="flex items-center justify-between h-[35px] pt-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden h-[35px] flex items-center mr-4"
          aria-label="Toggle menu"
        >
          <Image
            src="/icons/header/menu.svg"
            alt="Menu"
            width={18}
            height={18}
            className="w-[18px] h-[18px]"
          />
        </button>
        <h1 className="font-inter font-semibold text-[20px] leading-none md:text-2xl text-center flex-1 md:flex-none md:text-left text-[#343C6A]">
          {getTitle()}
        </h1>
        <div className="md:hidden h-[35px] flex items-center">
          <ProfileAvatar size={35} />
        </div>
      </div>

      <div className="flex items-center gap-8 my-0">
        {/* Search */}
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search for something"
            className="w-full md:w-[255px] h-[40px] md:h-[50px] pl-[50px] pr-4 rounded-full bg-[#F5F7FA] border-none font-inter font-normal text-[15px] leading-none placeholder:text-[#8BA3CB] text-[#8BA3CB] focus:ring-0"
          />
          <Image
            src="/icons/header/search.svg"
            alt="Search"
            width={20}
            height={20}
            className="absolute left-[13px] top-1/2 -translate-y-1/2 w-[20px] h-[20px]"
          />
        </div>

        {/* Settings and Notifications - Show on tablet and desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button className="w-[50px] h-[50px] flex items-center justify-center bg-[#F5F7FA] rounded-full">
            <Image
              src="/icons/header/settings.svg"
              alt="Settings"
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
            />
          </button>
          <button className="w-[50px] h-[50px] flex items-center justify-center bg-[#F5F7FA] rounded-full">
            <Image
              src="/icons/header/notification.svg"
              alt="Notifications"
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
            />
          </button>
        </div>

        {/* Profile - Show on tablet and desktop */}
        <div className="hidden md:flex items-center gap-3">
          <ProfileAvatar size={60} />
        </div>
      </div>
    </header>
  );
}
