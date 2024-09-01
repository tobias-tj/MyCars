"use client";
import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "@/public/errorpayment.json"; // Ajusta la ruta si es necesario

export default function OrderErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-64 h-64">
            <Lottie animationData={errorAnimation} loop={true} />
          </div>
          <h1 className="text-2xl">
            !OPS Ha ocurrido un eror. Vuelva a intentarlo mas tarde
          </h1>
          <Link href="/">
            <Button>Vuelva a ver los productos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
