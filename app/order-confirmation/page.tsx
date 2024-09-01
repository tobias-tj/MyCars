import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function OrderConfirmationPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">¡Gracias por tu pago!</h1>
          <p>
            En breve recibirás toda la información a través de tu correo
            electrónico.
          </p>
          <p>
            Si tienes alguna consulta o necesitas asistencia adicional, no dudes
            en contactarnos. ¡Estamos aquí para ayudarte!
          </p>
          <Link href="/">
            <Button>Volver a ver los productos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
