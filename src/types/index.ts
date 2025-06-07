export interface Project {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  slug?: string;
  description?: string;
}

export interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export interface ViewMoreCardProps {
  onClick?: () => void;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  caseStudyLink?: string;
}

export interface TestimonialSectionProps {
  testimonials?: Testimonial[];
}

export interface FeaturedProject {
  id: number;
  title: string;
  location: string;
  year: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  slug?: string;
}

export interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
}
