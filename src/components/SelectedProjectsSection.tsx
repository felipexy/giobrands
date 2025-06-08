"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 2,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 3,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 4,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 5,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 6,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 7,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 8,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 9,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
  {
    id: 10,
    title: "Test Project",
    image: "/assets/jpgs/projects/dona-varda/dona-varda-cover.jpg",
  },
];

const SelectedProjectsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-24">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-wider">
            PROJETOS
            <br />
            SELECIONADOS
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore nossa coleção cuidadosamente selecionada de projetos que
            demonstram uma ampla gama de projetos. Estes casos focam em
            representar algumas de nossas obras favoritas dos últimos anos,
            mostrando marcas impactantes e soluções criativas.
          </p>
          <button
            className="text-white px-8 py-3 rounded-full font-medium hover:opacity-80 transition-all duration-300"
            style={{ backgroundColor: "#ABABAB" }}
          >
            Fale conosco
          </button>
        </div>

        {/* Projects Grid - Always 2 columns */}
        <div className="grid grid-cols-2 gap-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer h-64 md:h-80"
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
                <div className="text-center">
                  <p className="text-white text-lg font-medium mb-2">
                    {project.title}
                  </p>
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
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
