"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 px-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Horizontal Line */}
        <div className="w-full h-px bg-gray-300 mb-8"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="text-sm text-gray-600">2025 © GIOBRANDS</div>

          {/* Center - Navigation */}
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-900 font-medium hover:text-gray-700 transition-colors cursor-pointer"
          >
            INÍCIO
          </button>

          {/* Right - Social Links */}
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <a
              href="https://www.instagram.com/giobrands.co?igsh=cnhobm90MnEwcTJz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              IG
            </a>
            <span>—</span>
            <a
              href="https://www.linkedin.com/in/giovanni-tramontini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              IN
            </a>
            <span>—</span>
            <a
              href="https://www.behance.net/giobrands/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              BE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
