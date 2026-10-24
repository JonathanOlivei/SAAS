import { useState } from "react";
import { usePathname } from "next/navigation";

export function SidebarDashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  console.log(pathname);

  return <div>{children}</div>;
}
