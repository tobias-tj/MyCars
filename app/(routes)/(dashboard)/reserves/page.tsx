import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import TableReserves from "./components/TableReserves/TableReserves";

export default async function PageReserves() {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const order = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(order);
  return (
    <div>
      <h1 className="mb-4 text-3xl">Reserves Page</h1>
      {order.length === 0 ? (
        <div className="flex flex-col justify-center gap-4">
          <h2>No tienes ningún pedido</h2>
          <p>Haz tus pedidos a través de la página de vehículos</p>
          <Link href="/cars">
            <Button>Lista de Vehículos</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={order} />
      )}
    </div>
  );
}
