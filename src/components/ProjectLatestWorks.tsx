"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectDetail, projectsData } from "@/data/projectsData";

interface ProjectLatestWorksProps {
  currentProject?: ProjectDetail;
}

export default function ProjectLatestWorks({
  currentProject,
}: ProjectLatestWorksProps) {
  const [randomProjects, setRandomProjects] = useState<ProjectDetail[]>([]);

  useEffect(() => {
    const filteredProjects = projectsData.filter((p) =>
      currentProject ? p.slug !== currentProject.slug : true
    );
    const shuffledProjects = [...filteredProjects]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    setRandomProjects(shuffledProjects);
  }, [currentProject]);

  return (
    <section className="mx-24 pt-4 mb-16">
      {/* Latest Works Header */}
      <div className="w-full h-px bg-gray-300 mb-4"></div>
      <div className="flex items-center justify-between mb-8">
        <div className="text-[13px] text-black">
          Últimos Trabalhos.{" "}
          <Link
            href="/selectedProjects"
            className="underline cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
          >
            Veja mais projetos interessantes aqui
          </Link>
        </div>
        <div className="text-[13px] text-black">(1 — 4)</div>
      </div>

      {/* Other Projects Grid */}
      <div className="grid grid-cols-2 gap-2">
        {randomProjects.length > 0 &&
          randomProjects.map((otherProject) => (
            <Link
              key={otherProject.slug}
              href={`/project/${otherProject.slug}`}
            >
              <div className="relative group cursor-pointer hover:z-10">
                <Image
                  src={otherProject.coverImage}
                  alt={otherProject.title}
                  width={800}
                  height={600}
                  className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-black text-sm font-medium tracking-wider opacity-80 bg-white bg-opacity-70 px-4 py-2 rounded-full">
                      VER MAIS
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
