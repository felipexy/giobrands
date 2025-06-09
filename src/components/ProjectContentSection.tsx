import { ProjectDetail } from "@/data/projectsData";

interface ProjectContentSectionProps {
  project: ProjectDetail;
}

export default function ProjectContentSection({
  project,
}: ProjectContentSectionProps) {
  return (
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
  );
}
