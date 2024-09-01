import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { TableReserves } from "./components/TableReserves";
import { isAdmin } from "@/lib/isAdmin";

export default async function ReservesAdminPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user || !isAdmin(userId)) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="text-3xl mb-4">Reserves Page</h1>

      <TableReserves orders={orders} />
    </div>
  );
}
