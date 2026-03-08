const products = [
  {
    name: "ZEP Academy",
    tagline: "BUILDING FUTURES | NURTURING MINDS",
    color: "from-yellow-900/60 to-yellow-600/20",
    border: "border-yellow-500/40",
    glow: "shadow-yellow-600/20",
    icon: "🎓",
    accent: "text-yellow-400",
    section: "academy",
  },
  {
    name: "ZEP SimuVerse PM",
    tagline: "SYSTEMS SIMULATION SOFTWARE",
    color: "from-blue-900/60 to-cyan-600/20",
    border: "border-cyan-500/40",
    glow: "shadow-cyan-600/20",
    icon: "🦏",
    accent: "text-cyan-400",
    section: "software",
  },
  {
    name: "ZEP Maximus",
    tagline: "SYSTEM CARE SOFTWARE",
    color: "from-purple-900/60 to-purple-600/20",
    border: "border-purple-500/40",
    glow: "shadow-purple-600/20",
    icon: "🐃",
    accent: "text-purple-400",
    section: "software",
  },
  {
    name: "ZEP Schedule",
    tagline: "SCHEDULE ANALYZER",
    color: "from-orange-900/60 to-orange-600/20",
    border: "border-orange-500/40",
    glow: "shadow-orange-600/20",
    icon: "🐯",
    accent: "text-orange-400",
    section: "software",
  },
];

export default function ProductsSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-black py-6 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <button
              key={p.name}
              onClick={() => scrollTo(p.section)}
              className={`group relative rounded-2xl border ${p.border} bg-gradient-to-br ${p.color} p-6 text-left flex flex-col items-center text-center shadow-xl ${p.glow} hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
            >
              <div className="text-5xl mb-4">{p.icon}</div>
              <p className={`font-black text-base md:text-lg ${p.accent} tracking-wider`}>{p.name}</p>
              <p className="text-gray-400 text-xs mt-2 tracking-widest uppercase">{p.tagline}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}