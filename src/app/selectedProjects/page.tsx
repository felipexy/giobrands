import {
  Header,
  SelectedProjectsSection,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SelectedProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
