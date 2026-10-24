import { Sidebar } from "lucide-react";
import { Children } from "react";
import { SidebarDashboard } from "./_components/sidebar";

export default function DashboardLayout({
  chilren,
}: {
  chilren: React.ReactNode;
}) {
  return (
    <>
      <SidebarDashboard>{chilren}</SidebarDashboard>
    </>
  );
}
