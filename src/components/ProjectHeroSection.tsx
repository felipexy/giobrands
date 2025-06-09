import Image from "next/image";
import { ProjectDetail } from "@/data/projectsData";

interface ProjectHeroSectionProps {
  project: ProjectDetail;
}

export default function ProjectHeroSection({
  project,
}: ProjectHeroSectionProps) {
  return (
    <>
      {/* First Section - Description and Metadata */}
      <section className="mx-24 py-12">
        <div>
          {/* Project Description */}
          <p className="text-2xl leading-relaxed text-gray-800 mb-12 max-w-4xl">
            {project.description}
          </p>

          {/* Metadata Line */}
          <div className="flex items-center justify-between text-[10px] font-medium text-black py-3 border-b border-gray-300">
            <div className="flex items-center space-x-8">
              <span className="tracking-wider">PROJETO</span>
              <span className="tracking-wider font-bold">{project.title}</span>
              <span className="tracking-wider">PAÍS</span>
              <span className="tracking-wider font-bold">
                {project.location.toUpperCase()}
              </span>
              <span className="tracking-wider">ANO</span>
              <span className="tracking-wider font-bold">{project.year}</span>
            </div>
            <div>
              <a
                href="#content"
                className="tracking-wider text-black font-bold cursor-pointer transition-colors hover:text-gray-600"
              >
                LEIA MAIS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="mx-24">
        <Image
          src={project.heroImage}
          alt={project.title}
          width={1721}
          height={792}
          className="w-full h-[600px] object-cover rounded-lg"
          priority
        />
      </div>
    </>
  );
}
