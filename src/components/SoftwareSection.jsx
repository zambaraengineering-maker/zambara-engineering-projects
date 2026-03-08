const software = [
  {
    name: "ZEP SimuVerse PM",
    tagline: "SYSTEMS SIMULATION SOFTWARE",
    icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ad6909a4c3839990a358c8/ce96262f6_ZEPPMSimulatorLogoonly.png",
    color: "from-cyan-900/40 to-blue-900/20",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
    glow: "shadow-cyan-600/20",
    features: [
      "Real-time project simulation engine",
      "Monte Carlo risk modeling",
      "Team & resource simulation",
      "Integrated PM workflows",
    ],
  },
  {
    name: "ZEP Maximus",
    tagline: "SYSTEM CARE SOFTWARE",
    icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ad6909a4c3839990a358c8/7fdf5903d_MaximusLogo.png",
    color: "from-purple-900/40 to-purple-800/20",
    border: "border-purple-500/30",
    accent: "text-purple-400",
    glow: "shadow-purple-600/20",
    features: [
      "System health monitoring",
      "Automated diagnostics",
      "Performance optimization tools",
      "Maintenance planning engine",
    ],
  },
  {
    name: "ZEP Schedule",
    tagline: "SCHEDULE ANALYZER",
    icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ad6909a4c3839990a358c8/0ea73e61a_ScheduleAnalyserlconCheetah.png",
    color: "from-orange-900/40 to-orange-800/20",
    border: "border-orange-500/30",
    accent: "text-orange-400",
    glow: "shadow-orange-600/20",
    features: [
      "Advanced Gantt & critical path analysis",
      "Delay detection & impact assessment",
      "Multi-project schedule tracking",
      "AI-assisted schedule optimization",
    ],
  },
];

export default function SoftwareSection() {
  return (
    <section id="software" className="bg-gradient-to-b from-black via-blue-950/10 to-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-500 text-sm font-bold tracking-[0.3em] uppercase mb-2">ZEP Software Suite</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-wider">
            POWERFUL ENGINEERING SOFTWARE
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Cutting-edge tools built for engineers, project managers, and operations teams who demand precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {software.map((sw) => (
            <div
              key={sw.name}
              className={`rounded-2xl border ${sw.border} bg-gradient-to-br ${sw.color} p-8 shadow-2xl ${sw.glow} hover:scale-[1.02] transition-all duration-300 flex flex-col`}
            >
              <div className="text-5xl mb-5">{sw.icon}</div>
              <p className={`font-black text-xl ${sw.accent} tracking-wider mb-1`}>{sw.name}</p>
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-6">{sw.tagline}</p>

              <ul className="space-y-3 flex-1">
                {sw.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 bg-current ${sw.accent}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
                className={`mt-8 w-full py-3 rounded-full border ${sw.border} ${sw.accent} font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}