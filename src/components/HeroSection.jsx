export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl text-yellow-400 tracking-widest uppercase mb-4 drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]" style={{ fontFamily: "'Book Antiqua', 'Palatino Linotype', Palatino, serif", fontWeight: 'bold' }}>
          ZAMBARA ENGINEERING PROJECTS
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Engineering innovation through simulation, scheduling, and education — empowering projects from concept to completion.
        </p>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="relative rounded-2xl overflow-hidden border border-yellow-600/20 shadow-2xl shadow-yellow-600/10">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ad6909a4c3839990a358c8/0fdafb8bc_Gemini_Generated_Image_v489f2v489f2v489.png"
            alt="Engineering team in meeting"
            className="w-full h-[400px] md:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-block bg-black/70 border border-yellow-500/40 rounded-xl px-6 py-3 backdrop-blur">
              <p className="text-yellow-400 font-bold text-lg tracking-wider">PROJECT EXCELLENCE IN EVERY PHASE</p>
              <p className="text-gray-300 text-sm mt-1">Integrated tools, training, and expertise for modern engineering teams.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}