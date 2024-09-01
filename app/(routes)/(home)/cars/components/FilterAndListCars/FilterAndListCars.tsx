"use client";
import React, { useEffect, useState } from "react";
import { FilterAndListCarsProps } from "./FilterAndListCars.types";
import { Car } from "@prisma/client";
import ListCars from "../ListCars/ListCars";
import FilterCars from "../FiltersCars/FilterCars";

export default function FilterAndListCars(props: FilterAndListCarsProps) {
  const { cars } = props;
  const [filteredCars, setFilteredCars] = useState<Car[]>();
  const [filters, setFilters] = useState({
    type: "",
    transmission: "",
    engine: "",
    people: "",
  });

  useEffect(() => {
    let filtered = cars;
    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      );
    }

    if (filters.engine) {
      filtered = filtered.filter((car) =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase())
      );
    }

    if (filters.people) {
      filtered = filtered.filter((car) =>
        car.people.toLowerCase().includes(filters.people.toLowerCase())
      );
    }

    setFilteredCars(filtered);
  }, [filters, cars]);

  const hanldeFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      transmission: "",
      engine: "",
      people: "",
    });
  };

  return (
    <div>
      <FilterCars
        setFilters={hanldeFilterChange}
        cleanFilter={clearFilters}
        filters={filters}
      />
      <ListCars cars={filteredCars} />
    </div>
  );
}
