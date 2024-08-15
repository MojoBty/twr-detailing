import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";

import carImage from '../public/exotic_car.png'

export default function Hero() {
  return (
    <div className="container relative pt-[6rem]">
      <div className="relative">
        <h1 className="mx-auto max-w-[68rem] text-[2.3rem] sm:text-[3rem] text-center font-semibold">
          Car Cleaning and Detailing for Daily Commuters to Car Enthusiasts
        </h1>
        <h2 className="mx-auto mt-[2rem] max-w-[40rem] text-[1.1rem] sm:text-[1.5rem] text-center font-regular text-abbey-800">
          Make your vehicle come to pristine condition, making every drive a joy.
        </h2>
        <div className="flex mt-[2rem] justify-center">
          <Button asChild className="p-6">
            <Link href="#">Book an Appointment</Link>
          </Button>
        </div>
      </div>
      <div className="flex mt-[4rem] mx-auto justify-center">
      <Image
          src={carImage}
          width={800}
          height={800}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
