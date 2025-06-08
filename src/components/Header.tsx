"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center px-6 py-4 lg:px-24">
      <div className="justify-self-start">
        <span className="text-lg font-medium text-gray-900">
          GioBrands & Co.®
        </span>
      </div>

      <div className="justify-self-center">
        <Image
          src="/assets/svgs/logo.svg"
          alt="GioBrands Logo"
          width={44}
          height={37}
          className="w-8 h-auto"
        />
      </div>

      <div className="justify-self-end">
        <button className="text-gray-900 cursor-pointer hover:text-gray-600 transition-all duration-300 font-medium relative border-b-2 border-transparent hover:border-gray-900">
          Faça acontecer
        </button>
      </div>
    </header>
  );
}
