import { notFound } from "next/navigation";
import {
  Header,
  Footer,
  ContactSection,
  ProjectHeroSection,
  ProjectContentSection,
  ProjectAdditionalImages,
  ProjectLatestWorks,
} from "@/components";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projectsData";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectPage({ params }: any) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProjectHeroSection project={project} />
      <ProjectContentSection project={project} />
      <ProjectAdditionalImages project={project} />
      <ProjectLatestWorks currentProject={project} />
      <ContactSection />
      <Footer />
    </div>
  );
}
