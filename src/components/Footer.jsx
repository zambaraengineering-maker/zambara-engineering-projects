export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-600/20 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center shadow-lg shadow-yellow-600/30">
            <span className="text-black font-black text-sm">ZEP</span>
          </div>
          <div>
            <p className="text-yellow-400 font-black tracking-wider text-sm">ZAMBARA ENGINEERING PROJECTS</p>
            <p className="text-gray-600 text-xs mt-0.5">Engineering Excellence, Every Project.</p>
          </div>
        </div>

        <div className="flex gap-8 text-gray-500 text-sm">
          {["Academy", "Software", "Contacts"].map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-yellow-400 transition-colors uppercase tracking-wider text-xs font-semibold"
            >
              {item}
            </button>
          ))}
        </div>

        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Zambara Engineering Projects. All rights reserved.
        </p>
      </div>
    </footer>
  );
}