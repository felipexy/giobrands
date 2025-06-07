"use client";

import Image from "next/image";
import { ProjectCardProps } from "@/types";

export default function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <div className="aspect-[4/3] bg-gray-900 relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
