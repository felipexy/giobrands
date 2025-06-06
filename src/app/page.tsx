import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 lg:px-12">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/svgs/Group 1.svg"
            alt="GioBrands Logo"
            width={44}
            height={37}
            className="w-8 h-auto"
          />
          <span className="text-lg font-medium text-gray-900">
            GioBrands & Co.®
          </span>
        </div>

        <button className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
          Faça acontecer
        </button>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Title */}
        <div className="text-center py-16 lg:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
            BUILDING BRANDS
            <br />
            <span className="block">THAT MAKE IT HAPPEN</span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-16 lg:mb-24">
          <div className="relative max-w-4xl w-full">
            <Image
              src="/assets/jpgs/661fb477b9587586337b38aab941da10ea1785fa.jpg"
              alt="TAVROS Wine Card - Premium branding experience"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Bottom Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-16 lg:pb-24">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              BEYOND STANDARDS,
              <br />
              <span className="block">CREATING TIMELESS BRANDS</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Com mais de 10 anos de experiência, formamos um time colaborativo,
              dinâmico e ágil que atua desde a ponta a ponta em processos
              completos como design, ilustração, redação e web design.
              Desenvolvemos cases que externalizam a essência dos propósitos,
              aliando beleza, planejamento & assertividade. Nossos trabalhos
              estão presentes em grandes capitais e já conquistamos mais de 15
              países, lançando mais de 150 marcas impactantes e alcançando uma
              diversidade incrível de nichos.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Muito além da estética, o design planejado é um dos primeiros e
              principais elementos fundamentais da sua estratégia de branding.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
