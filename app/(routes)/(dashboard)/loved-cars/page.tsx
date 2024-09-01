import React from "react";
import ListLovedCars from "./components/ListLovedCars/ListLovedCars";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function LovedCarsPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  return (
    <div>
      <h1 className="text-2xl">Tus autos favoritos</h1>

      <ListLovedCars />
    </div>
  );
}
