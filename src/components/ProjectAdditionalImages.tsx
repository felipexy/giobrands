import Image from "next/image";
import { ProjectDetail } from "@/data/projectsData";

interface ProjectAdditionalImagesProps {
  project: ProjectDetail;
}

export default function ProjectAdditionalImages({
  project,
}: ProjectAdditionalImagesProps) {
  if (!project.additionalImages || project.additionalImages.length === 0) {
    return null;
  }

  return (
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
  );
}
