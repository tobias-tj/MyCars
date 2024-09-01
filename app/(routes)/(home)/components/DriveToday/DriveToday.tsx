import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DriveToday() {
  return (
    <div className="p-6 lg:my-32 max-w-7xl mx-auto">
      <div className="relative rounded-xl">
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className="bg-[url('/images/background2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
          <div>
            <h3 className="text-4xl text-white font-bold">
              Drive your dream car Today
            </h3>
            <p className="text-white text-xl my-5">
              Register and explore the world of premium cars
            </p>
            <Link href="/sign-in">
              <Button variant="outline" size="lg">
                Register Here
              </Button>
            </Link>
          </div>
          <Reveal className="lg:absolute lg:-right-32 top-5" position="bottom">
            <Image
              src="/images/autoexample.png"
              alt="Car Drive"
              width={550}
              height={250}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
