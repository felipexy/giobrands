"use client";

import Image from "next/image";
import { featuredProjectsList } from "@/data/featuredProjects";

export default function FeaturedProjectsSection() {
  const handleProjectClick = (slug?: string) => {
    // Navigate to project detail page
    console.log(`Navigate to project: ${slug}`);
  };

  return (
    <section className="py-24 px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-t border-gray-300 pt-8 mb-16">
          <h2 className="text-xs font-medium text-gray-900 tracking-widest">
            PROJETOS SELECIONADOS
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {featuredProjectsList.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.slug)}
            >
              {/* Project Image */}
              <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-lg">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left - Title and Location */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    {project.title}
                    <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600">
                    {project.location}/{project.year}
                  </p>
                </div>

                {/* Right - Description */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
