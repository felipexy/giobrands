"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "NYX",
    slug: "nyx",
    image: "/assets/jpgs/projects/nyx/nyx-cover.jpg",
  },
  {
    id: 2,
    title: "Dona Varda",
    slug: "dona-varda",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 3,
    title: "Thiber",
    slug: "thiber",
    image: "/assets/jpgs/projects/thiber/thiber-cover.jpg",
  },
  {
    id: 4,
    title: "Bike",
    slug: "bike",
    image: "/assets/jpgs/projects/bike/bike-cover.jpg",
  },
  {
    id: 5,
    title: "Mobile App",
    slug: "mobile-app",
    image: "/assets/jpgs/projects/mobile-app/mobile-app-cover.jpg",
  },
  {
    id: 6,
    title: "Bagby",
    slug: "bagby",
    image: "/assets/jpgs/projects/bagby/bagby-cover.jpg",
  },
  {
    id: 7,
    title: "Beynum",
    slug: "beynum",
    image: "/assets/jpgs/projects/beynum/beynum-cover.jpg",
  },
  {
    id: 8,
    title: "Mobile App 2",
    slug: "mobile-app-2",
    image: "/assets/jpgs/projects/mobile-app-2/mobile-app-2-cover.jpg",
  },
  {
    id: 9,
    title: "Tavros",
    slug: "tavros",
    image: "/assets/jpgs/projects/tavros/tavros-cover.jpg",
  },
  {
    id: 10,
    title: "Kampeki",
    slug: "kampeki",
    image: "/assets/jpgs/projects/kampeki/kampeki-cover.jpg",
  },
  {
    id: 11,
    title: "Finance",
    slug: "finance",
    image: "/assets/jpgs/projects/finance/finance-cover.jpg",
  },
  {
    id: 12,
    title: "Omega",
    slug: "omega",
    image: "/assets/jpgs/projects/omega/omega-cover.jpg",
  },
  {
    id: 13,
    title: "Universo Sugar",
    slug: "universo-sugar",
    image: "/assets/jpgs/projects/universo-sugar/universo-sugar-cover.jpg",
  },
  {
    id: 14,
    title: "Fram Way",
    slug: "fram-way",
    image: "/assets/jpgs/projects/fram-way/fram-way-cover.jpg",
  },
];

const SelectedProjectsSection = () => {
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/project/${slug}`);
  };

  const handleContactClick = () => {
    // Navigate to contact section or page
    console.log("Navigate to contact");
  };

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="mx-4 md:mx-12 lg:mx-24">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 px-2 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-4 md:mb-6 tracking-wider">
            PROJETOS
            <br />
            SELECIONADOS
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-4 md:px-0">
            Explore nossa coleção cuidadosamente selecionada de projetos que
            demonstram uma ampla gama de projetos. Estes casos focam em
            representar algumas de nossas obras favoritas dos últimos anos,
            mostrando marcas impactantes e soluções criativas.
          </p>
          <button
            className="text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium hover:opacity-80 transition-all duration-300 cursor-pointer text-sm md:text-base"
            style={{ backgroundColor: "#ABABAB" }}
            onClick={handleContactClick}
          >
            Fale conosco
          </button>
        </div>

        {/* Projects Grid - Always 2 columns, but responsive heights */}
        <div className="grid grid-cols-2 gap-1 md:gap-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer h-32 sm:h-48 md:h-64 lg:h-80"
              onClick={() => handleProjectClick(project.slug)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1721}
                height={792}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              {/* Overlay que só aparece no hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"></div>
              {/* Call to action que só aparece no hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="text-center px-2">
                  <p className="text-white text-sm md:text-lg font-medium mb-1 md:mb-2">
                    {project.title}
                  </p>
                  <button className="bg-white cursor-pointer text-black px-3 md:px-6 py-1 md:py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 text-xs md:text-sm">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjectsSection;
