import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Title */}
        <div className="text-center py-12 lg:py-12">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            BUILDING BRANDS
            <br />
            <span className="block">THAT MAKE IT HAPPEN</span>
          </h1>
        </div>
      </main>

      {/* Hero Image - Full Width */}
      <div className="mx-24 mb-16 lg:mb-24">
        <Image
          src="/assets/jpgs/hero.jpg"
          alt="TAVROS Wine Card - Premium branding experience"
          width={1721}
          height={792}
          className="w-full h-[392px] object-cover rounded-lg shadow-2xl"
          priority
        />
      </div>
    </>
  );
}
