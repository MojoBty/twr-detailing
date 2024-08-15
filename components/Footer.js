import Link from "next/link";

import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"
 
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="flex h-28 bg-abbey-800 text-white justify-between align-middle items-center font-normal text-base">
      <div className="flex w-full justify-between px-4 sm:px-12">
        <div className="flex items-center text-[0.8rem] sm:text-[1rem]">
        © 2024. All rights reserved.
        </div>
        <div>
          <ul className="flex">
            <li className="px-2 sm:px-8">
              <Button size="icon" className="bg-abbey-500 h-9 w-9 sm:h-11 sm:w-11 rounded-full">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-abbey-200"/>
              </Button>
            </li>
            <li className="px-2 sm:px-8">
              <Button size="icon" className="bg-abbey-500 h-9 w-9 sm:h-11 sm:w-11 rounded-full">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-abbey-200"/>
              </Button>
            </li>
            <li className="px-2 sm:px-8">
              <Button size="icon" className="bg-abbey-500 h-9 w-9 sm:h-11 sm:w-11 rounded-full">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-abbey-200"/>
              </Button>
            </li>
            <li className="px-2 sm:px-8">
              <Button size="icon" className="bg-abbey-500 h-9 w-9 sm:h-11 sm:w-11 rounded-full">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-abbey-200"/>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
