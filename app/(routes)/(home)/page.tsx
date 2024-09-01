import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FirtsBlock from "./components/FirstBlock/FirtsBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import DriveToday from "./components/DriveToday/DriveToday";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirtsBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  );
}
