import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { carId: string } }
) {
  try {
    const { userId } = auth();
    const { carId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const car = await db.car.update({
      where: {
        id: carId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    console.log("[CAR FORM ID]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}