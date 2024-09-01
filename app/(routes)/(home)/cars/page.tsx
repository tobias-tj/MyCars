import { Navbar } from "@/components/Shared/Navbar";
import { db } from "@/lib/db";
import React from "react";
import HeaderCars from "./components/HeaderCars/HeaderCars";
import FilterAndListCars from "./components/FilterAndListCars/FilterAndListCars";

export default async function PageCars() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <HeaderCars />
        <div>
          <FilterAndListCars cars={cars} />
        </div>
      </div>
    </div>
  );
}
