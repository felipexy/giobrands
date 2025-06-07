import {
  Header,
  Hero,
  StatsSection,
  AboutSection,
  ProjectsSection,
  TestimonialSection,
  FeaturedProjectsSection,
  AboutAuthorSection,
  ServicesSection,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <TestimonialSection />
      <FeaturedProjectsSection />
      <AboutAuthorSection />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
