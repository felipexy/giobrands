import { notFound } from "next/navigation";
import { Header, Footer, ContactSection } from "@/components";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projectsData";
import Image from "next/image";

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
              <span className="tracking-wider text-black font-bold cursor-pointer transition-colors">
                LEIA MAIS
              </span>
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
      <section className="mx-24 py-16">
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
        <section className="mx-24 mb-8 space-y-8">
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
      <ContactSection />
      <Footer />
    </div>
  );
}
