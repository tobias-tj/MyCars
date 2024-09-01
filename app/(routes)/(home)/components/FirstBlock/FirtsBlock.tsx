/* eslint-disable */

import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";
import React from "react";

export default function FirtsBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <Reveal className="p-6 lg:pl-40" position="bottom">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
          Premium<span className="block">Car Rental </span>
          in Paraguay
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Experience the thrill of driving the world's finest cars. Elevate your
          journey and indulge in unmatched luxury and performance, right here in
          Paraguay.
        </p>
      </Reveal>

      <Reveal className="flex justify-end" position="right">
        <Image
          src="/images/homeimagenew.png"
          alt="My Cars"
          width={800}
          height={800}
          priority
        />
      </Reveal>
    </div>
  );
}
