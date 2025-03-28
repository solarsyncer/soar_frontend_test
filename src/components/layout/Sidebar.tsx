"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Receipt,
  Users,
  Briefcase,
  CreditCard,
  PiggyBank,
  Settings,
  Wrench,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Transactions", href: "/transactions", icon: Receipt },
  { name: "Accounts", href: "/accounts", icon: Users },
  { name: "Investments", href: "/investments", icon: Briefcase },
  { name: "Credit Cards", href: "/credit-cards", icon: CreditCard },
  { name: "Loans", href: "/loans", icon: PiggyBank },
  { name: "Services", href: "/services", icon: Wrench },
  { name: "My Privileges", href: "/privileges", icon: Users },
  { name: "Setting", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] bg-white fixed top-0 bottom-0 left-0 hidden md:block border-r border-border">
      {/* Logo */}
      <div className="h-[100px] flex items-center px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white text-xl font-bold">S</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Soar Task</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-8">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

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
              <Icon
                className={`w-[25px] h-[25px] ${
                  isActive ? "text-text-primary" : "text-[#B1B1B1]"
                }`}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
