import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Soar Task",
  description: "View your financial overview and recent activities",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
