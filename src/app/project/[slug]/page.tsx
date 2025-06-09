import { notFound } from "next/navigation";
import { Header, Footer, ContactSection } from "@/components";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projectsData,
} from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

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

      {/* Content Section */}
      <section id="content" className="mx-24 py-16">
        <div className="grid grid-cols-12 gap-16">
          {/* Left Column - Title and Categories */}
          <div className="col-span-6">
            <h1 className="text-5xl font-bold text-black mb-12 leading-tight">
              {project.title}
            </h1>

            <div className="space-y-1">
              <div className="grid grid-cols-2 gap-4 border-t border-black pt-1">
                <div>
                  <h3 className="text-[10px] font-bold text-black tracking-wider">
                    SERVICES
                  </h3>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-black tracking-wider text-right">
                    BRAND IDENTITY, DESIGN
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-black py-1">
                <div>
                  <h3 className="text-[10px] font-bold text-black tracking-wider">
                    INDUSTRY
                  </h3>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-black tracking-wider text-right">
                    CULTURE
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-6">
            <div className="space-y-8">
              {/* First paragraph */}
              <p className="text-[13px] leading-relaxed text-gray-800">
                {project.concept}
              </p>

              {/* Challenge section */}
              <p className="text-[13px] leading-relaxed text-gray-800">
                {project.challenge}
              </p>

              {/* Quote */}
              <blockquote className="my-12">
                <p className="text-2xl font-medium text-black italic leading-relaxed">
                  &ldquo;{project.quote}&rdquo;
                </p>
              </blockquote>

              {/* Solution */}
              <p className="text-[13px] leading-relaxed text-gray-800">
                {project.solution}
              </p>

              {/* Second Quote */}
              {project.details.length > 0 && (
                <blockquote className="my-12">
                  <p className="text-2xl font-medium text-black italic leading-relaxed">
                    &ldquo;{project.details[0]}&rdquo;
                  </p>
                </blockquote>
              )}

              {/* Result */}
              <p className="text-[13px] leading-relaxed text-gray-800">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Images Section */}
      {project.additionalImages && project.additionalImages.length > 0 && (
        <section className="mx-24 mb-4 space-y-4">
          {project.additionalImages.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                width={1721}
                height={792}
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          ))}
        </section>
      )}

      {/* Latest Works Section */}
      <section className="mx-24 pt-4 pb-8">
        <div className="w-full h-px bg-gray-300 mb-4"></div>
        <div className="flex items-center justify-between">
          <div className="text-[13px] text-black">
            Latest Works.{" "}
            <span className="underline cursor-pointer text-gray-400">
              See more exciting here
            </span>
          </div>
          <div className="text-[13px] text-black">(1 — 4)</div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="mx-24 mb-16">
        <div className="grid grid-cols-2 gap-2">
          {projectsData
            .filter((p) => p.slug !== project.slug)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((otherProject) => (
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

      <ContactSection />
      <Footer />
    </div>
  );
}
