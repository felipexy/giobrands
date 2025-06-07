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
