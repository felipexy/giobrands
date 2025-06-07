import { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    id: 1,
    imageSrc: "/assets/jpgs/nyx-project.jpg",
    imageAlt: "NYX Project - Branding and visual identity design",
    title: "NYX",
    subtitle: "(BRASIL)",
    slug: "nyx-branding",
    description: "Complete branding and visual identity design for NYX brand.",
  },
  {
    id: 2,
    imageSrc: "/assets/jpgs/dona-varda-project.jpg",
    imageAlt: "Hero Project - Premium branding experience",
    title: "HERO PROJECT",
    subtitle: "(BRASIL)",
    slug: "hero-project",
    description: "Premium branding experience and visual identity design.",
  },
  {
    id: 3,
    imageSrc: "/assets/jpgs/thiber-project.jpg",
    imageAlt: "NYX Project Variant - Creative branding solutions",
    title: "NYX VARIANT",
    subtitle: "(BRASIL)",
    slug: "nyx-variant",
    description: "Alternative creative branding solutions for NYX brand.",
  },
];

// You can add more project collections here
export const allProjects: Project[] = [
  ...featuredProjects,
  // Add more projects as needed
];
