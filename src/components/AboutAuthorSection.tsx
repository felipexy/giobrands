"use client";

import Image from "next/image";

export default function AboutAuthorSection() {
  const handleContactClick = () => {
    // Navigate to contact or open contact form
    console.log("Contact clicked");
  };

  return (
    <section className="py-24 px-24" style={{ backgroundColor: "#141414" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-40 items-center justify-center">
          {/* Author Photo */}
          <div className="relative w-[280px] h-[360px] overflow-hidden rounded-3xl flex-shrink-0">
            <Image
              src="/assets/jpgs/profile/profile.png"
              alt="Giovanni Tramontini - Founder of GioBrands & Co."
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-white space-y-5 max-w-md">
            {/* Header */}
            <h2 className="text-xs font-medium text-gray-400 tracking-widest">
              (Sobre)
            </h2>

            {/* Title */}
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Prazer, Giovanni Tramontini.
              </h3>
              <h4 className="text-base text-gray-300 leading-relaxed">
                Estrategista de marcas e fundador
                <br />
                do estúdio GioBrands & Co.®
              </h4>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm pt-2">
              I design brand identities that turn complexity into clarity. My
              work is rooted in strategic thinking, visual precision and systems
              that last. By aligning aesthetics with purpose, I help brands
              communicate with intention, earn trust, and stand out in the real
              world.
            </p>

            {/* Contact Link */}
            <div className="pt-4">
              <button
                onClick={handleContactClick}
                className="group flex items-center text-white hover:text-gray-300 transition-colors duration-300"
              >
                <span className="text-sm font-medium">Vamos conversar</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
