"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/", icon: "/icons/sidebar/dashboard.svg" },
  {
    name: "Transactions",
    href: "#",
    icon: "/icons/sidebar/transactions.svg",
  },
  { name: "Accounts", href: "#", icon: "/icons/sidebar/accounts.svg" },
  {
    name: "Investments",
    href: "#",
    icon: "/icons/sidebar/investments.svg",
  },
  {
    name: "Credit Cards",
    href: "#",
    icon: "/icons/sidebar/credit_cards.svg",
  },
  { name: "Loans", href: "#", icon: "/icons/sidebar/loans.svg" },
  { name: "Services", href: "#", icon: "/icons/sidebar/services.svg" },
  {
    name: "My Privileges",
    href: "#",
    icon: "/icons/sidebar/my_privileges.svg",
  },
  { name: "Setting", href: "/settings", icon: "/icons/sidebar/settings.svg" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] bg-white fixed top-0 bottom-0 left-0 hidden md:block border-r border-border">
      {/* Logo */}
      <div className="h-[100px] flex items-center pl-[38px]">
        <Link href="/" className="flex items-center gap-3">
          <span className="icon-[mingcute--task-fill] w-[35px] h-[35px]" />
          <p className="text-[25px] font-extrabold font-inter leading-none text-gray-900">
            Soar Task
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 pl-11 pr-6 h-[60px] transition-colors relative font-inter font-medium text-lg leading-none ${
                isActive
                  ? "text-text-primary font-medium before:absolute before:left-0 before:top-0 before:h-full before:w-[6px] before:rounded-r-[10px] before:bg-primary"
                  : "text-[#B1B1B1] hover:bg-gray-50"
              }`}
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
          );
        })}
      </nav>
    </aside>
  );
}
