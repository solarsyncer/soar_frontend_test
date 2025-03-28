"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="h-[100px] bg-white flex items-center justify-between px-6 fixed top-0 right-0 left-0 md:left-[250px] border-b border-border">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold hidden md:block">Overview</h1>
        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-8">
        {/* Search */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search for something"
            className="w-[255px] h-[50px] pl-[50px] pr-4 rounded-full bg-[#F5F7FA] border-none font-inter font-normal text-[15px] leading-none placeholder:text-[#8BA3CB] text-[#8BA3CB] focus:ring-0"
          />
          <Image
            src="/icons/header/search.svg"
            alt="Search"
            width={20}
            height={20}
            className="absolute left-[13px] top-1/2 -translate-y-1/2 w-[20px] h-[20px]"
          />
        </div>

        {/* Settings and Notifications */}
        <div className="flex items-center gap-6">
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

        {/* Profile */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/avatar.png"
            alt="Profile"
            width={60}
            height={60}
            className="w-[60px] h-[60px] rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
