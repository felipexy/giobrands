export default function AboutSection() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Separator Line */}
      <div className="border-t border-black mb-9"></div>

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
            aliando beleza, planejamento & assertividade. Nossos trabalhos estão
            presentes em grandes capitais e já conquistamos mais de 15 países,
            lançando mais de 150 marcas impactantes e alcançando uma diversidade
            incrível de nichos.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Muito além da estética, o design planejado é um dos primeiros e
            principais elementos fundamentais da sua estratégia de branding.
          </p>
        </div>
      </section>
    </main>
  );
}
