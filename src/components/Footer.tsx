export default function Footer() {
  return (
    <footer className="py-8 px-24" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Horizontal Line */}
      <div className="w-full h-px bg-gray-300 mb-8"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="text-sm text-gray-600">2025 © GIOBRANDS</div>

          {/* Center - Navigation */}
          <div className="text-sm text-gray-900 font-medium">INÍCIO</div>

          {/* Right - Social Links */}
          <div className="text-sm text-gray-600">IG — IN — BE</div>
        </div>
      </div>
    </footer>
  );
}
