import { Header, Hero, AboutSection, ProjectsSection } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
