"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center px-4 py-3 md:px-6 md:py-4 lg:px-24">
      <div className="justify-self-start">
        <Link
          href="/"
          className="text-sm md:text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 cursor-pointer"
        >
          GioBrands & Co.®
        </Link>
      </div>

      <div className="justify-self-center">
        <Image
          src="/assets/svgs/logo.svg"
          alt="GioBrands Logo"
          width={44}
          height={37}
          className="w-6 md:w-8 h-auto"
        />
      </div>

      <div className="justify-self-end">
        <button className="text-gray-900 cursor-pointer hover:text-gray-600 transition-all duration-300 font-medium relative border-b-2 border-transparent hover:border-gray-900 text-sm md:text-base">
          Faça acontecer
        </button>
      </div>
    </header>
  );
}
