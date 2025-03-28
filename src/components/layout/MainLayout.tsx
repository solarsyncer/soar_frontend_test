import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-[100px] md:pl-[250px] p-6 bg-background">
        <div className="max-w-[1400px] mx-auto space-y-6 px-[40px] pt-[25px]">
          {children}
        </div>
      </main>
    </div>
  );
}
