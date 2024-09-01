import React from "react";
import Sidebar from "./dashboard/components/Sidebar/Sidebar";
import { NavbarDashboard } from "./dashboard/components/NavbarDashboard";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden xl:block w-80 xl:fixed h-full">
        <Sidebar />
      </div>
      <div className="w-full h-full xl:ml-80">
        <NavbarDashboard />
        <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
