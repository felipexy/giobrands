"use client";

import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";
import ViewMoreCard from "./ViewMoreCard";
import { featuredProjects } from "@/data/projects";

export default function ProjectsSection() {
  const router = useRouter();

  const handleProjectClick = (projectId: number) => {
    // Map project IDs to correct slugs
    const projectSlugMap: { [key: number]: string } = {
      1: "nyx", // NYX project
      2: "dona-varda", // HERO PROJECT -> Dona Varda
      3: "thiber", // NYX VARIANT -> Thiber
    };

    const slug = projectSlugMap[projectId];
    if (slug) {
      router.push(`/project/${slug}`);
    }
  };

  const handleViewMoreClick = () => {
    // Navigate to selected projects page
    router.push("/selectedProjects");
  };

  return (
    <section className="px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-base font-medium text-gray-900 mb-9 tracking-wide">
          ÚLTIMOS PROJETOS
        </h2>

        <div className="grid grid-cols-2 gap-3 cursor-pointer">
          {/* Render project cards */}
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              subtitle={project.subtitle}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}

          {/* Ver Mais Button */}
          <ViewMoreCard onClick={handleViewMoreClick} />
        </div>
      </div>
    </section>
  );
}
