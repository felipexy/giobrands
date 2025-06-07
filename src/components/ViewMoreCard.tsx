"use client";

import Image from "next/image";
import { ViewMoreCardProps } from "@/types";

export default function ViewMoreCard({ onClick }: ViewMoreCardProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-visible h-full"
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative flex items-center justify-center">
        {/* Back Left Card - Dark */}
        <div className="absolute w-32 h-44 bg-gray-900 rounded-lg shadow-2xl transform rotate-[-12deg] translate-x-[-65px] translate-y-[8px] transition-all duration-500 ease-out group-hover:rotate-[-20deg] group-hover:translate-x-[-85px] group-hover:translate-y-[-10px] group-hover:scale-105 z-10 overflow-hidden">
          <Image
            src="/assets/jpgs/ver-mais/left.jpg"
            alt="NYX Project"
            fill
            className="object-cover"
          />
        </div>

        {/* Back Right Card - Bright Green */}
        <div className="absolute w-32 h-44 bg-lime-400 rounded-lg shadow-2xl transform rotate-[12deg] translate-x-[65px] translate-y-[8px] transition-all duration-500 ease-out group-hover:rotate-[20deg] group-hover:translate-x-[85px] group-hover:translate-y-[-10px] group-hover:scale-105 z-10 overflow-hidden">
          <Image
            src="/assets/jpgs/ver-mais/right.jpg"
            alt="Hero Project"
            fill
            className="object-cover"
          />
        </div>

        {/* Front Center Card - Coral */}
        <div className="relative w-40 h-52 bg-gradient-to-br from-orange-300 to-red-400 rounded-lg shadow-2xl transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:translate-y-[-15px] z-20 overflow-hidden">
          <Image
            src="/assets/jpgs/ver-mais/center.jpg"
            alt="TAVROS Project"
            fill
            className="object-cover"
          />
        </div>

        {/* Ver Mais Button */}
        <div className="absolute z-30 bg-black text-white px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 group-hover:scale-105 shadow-2xl">
          VER MAIS
        </div>
      </div>
    </div>
  );
}
