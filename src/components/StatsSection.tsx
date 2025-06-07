export default function StatsSection() {
  return (
    <section className="py-16 px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32">
          {/* 10 Anos de Experiência */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
            <div className="text-left">
              <div className="text-lg font-medium text-gray-900">
                10 ANOS DE
              </div>
              <div className="text-lg font-medium text-gray-600">
                EXPERIÊNCIA
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-gray-200"></div>

          {/* +100 Projetos */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
              <div className="text-gray-400 text-lg">©</div>
            </div>
            <div className="text-left">
              <div className="text-lg font-medium text-gray-900">+DE 100</div>
              <div className="text-lg font-medium text-gray-600">PROJETOS</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-gray-200"></div>

          {/* 6 Países pelo Globo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-lg font-medium text-gray-900">6 PAÍSES</div>
              <div className="text-lg font-medium text-gray-600">
                PELO GLOBO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
