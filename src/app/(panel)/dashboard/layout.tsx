import { Children } from "react";

export default function DashboardLayout({
  chilren,
}: {
  chilren: React.ReactNode;
}) {
    return(<>
        <h1 className="font-bold">SIDEBAR TESTE DO LAYOUT</h1>
        {chilren}
    </>)
}
