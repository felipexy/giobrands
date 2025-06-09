"use client";

import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();
  return (
    <section className="py-24 px-24" style={{ backgroundColor: "#F6F6F6" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Label */}
          <div className="flex flex-col">
            <div className="text-xs font-medium text-gray-600 tracking-wider">
              (CONTATO)
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-6xl font-light leading-none text-gray-900 mb-12">
              Vamos fazer
              <br />
              seu projeto
              <br />
              acontecer.
            </h2>

            {/* CTA Button */}
            <button
              onClick={() => router.push("/contact")}
              className="bg-black cursor-pointer text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors w-fit"
            >
              Trabalhe Comigo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
