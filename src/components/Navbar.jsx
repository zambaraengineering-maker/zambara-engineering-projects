import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ad6909a4c3839990a358c8/47223354b_ZambaraEngineeringLogo.png"
            alt="Zambara Engineering Projects Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          {["hero", "academy", "software", "contacts"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-6 py-2 rounded-full border border-red-700 text-white font-semibold uppercase tracking-wider text-sm hover:bg-red-700/30 hover:border-red-500 transition-all duration-200"
            >
              {item === "hero" ? "Home" : item}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-yellow-600/20 px-6 py-4 flex flex-col gap-3">
          {["hero", "academy", "software", "contacts"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="w-full py-3 rounded-full border border-red-700 text-white font-semibold uppercase tracking-wider text-sm hover:bg-red-700/30 transition-all"
            >
              {item === "hero" ? "Home" : item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}