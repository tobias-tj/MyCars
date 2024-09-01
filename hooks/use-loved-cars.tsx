import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Car } from "@prisma/client";
import { toast } from "./use-toast";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLovedItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "El vehiculo ya existe en la lista ❗",
          });
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast({
          title: "Vehiculo agregado a la lista 🖤",
        });
      },
      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id != id)],
        });
        toast({
          title: "El vehiculo se ha eliminado de la lista🗑️",
        });
      },
    }),

    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
