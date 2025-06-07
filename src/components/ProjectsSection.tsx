"use client";

import ProjectCard from "./ProjectCard";
import ViewMoreCard from "./ViewMoreCard";
import { featuredProjects } from "@/data/projects";

export default function ProjectsSection() {
  const handleProjectClick = (projectId: number) => {
    // Navigate to project page - you can implement this with Next.js router
    console.log(`Navigate to project ${projectId}`);
  };

  const handleViewMoreClick = () => {
    // Navigate to projects listing page
    console.log("Navigate to all projects");
  };

  return (
    <section className="px-24 py-16">
      <h2 className="text-lg font-medium text-gray-900 mb-9 tracking-wide">
        ÚLTIMOS PROJETOS
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl">
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
    </section>
  );
}
