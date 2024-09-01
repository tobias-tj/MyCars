"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import SidebarItem from "./SidebarItem/SidebarItem";
import { isAdmin } from "@/lib/isAdmin";

export default function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}

          <Separator className="my-4 border-gray-300" />

          {isAdmin(userId) && (
            <div>
              <p className="mb-2 text-slate-500">ADMIN</p>
              {dataAdminSidebar.map((item) => (
                <SidebarItem key={item.label} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
