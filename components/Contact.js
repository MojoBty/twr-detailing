import { Button } from "./ui/button";
import Link from "next/link";

import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="container relative pt-[12rem] pb-[6rem]" id="contact">
      <h1 className="mx-auto max-w-[68rem] text-[2.5rem] text-center font-medium">
          Have any questions?
      </h1>
      <div className="flex mt-[2rem] justify-center">
        <Button className="px-12 py-6 rounded-2xl">
          <Mail />
          <Link className="ml-4" href="#">Contact us</Link>
        </Button>
      </div>
    </div>
  );
}