const courses = [
  { title: "Project Management Fundamentals", duration: "6 Weeks", level: "Beginner" },
  { title: "Systems Simulation & Modeling", duration: "8 Weeks", level: "Intermediate" },
  { title: "Engineering Scheduling & Planning", duration: "4 Weeks", level: "Intermediate" },
  { title: "Advanced Project Analytics", duration: "10 Weeks", level: "Advanced" },
  { title: "Leadership in Engineering Projects", duration: "5 Weeks", level: "All Levels" },
  { title: "Risk Management in Engineering", duration: "6 Weeks", level: "Intermediate" },
];

const levelColor = {
  Beginner: "text-green-400 border-green-500/40 bg-green-900/20",
  Intermediate: "text-yellow-400 border-yellow-500/40 bg-yellow-900/20",
  Advanced: "text-red-400 border-red-500/40 bg-red-900/20",
  "All Levels": "text-cyan-400 border-cyan-500/40 bg-cyan-900/20",
};

export default function AcademySection() {
  return (
    <section id="academy" className="bg-gradient-to-b from-black via-yellow-950/10 to-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-14">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center text-4xl shadow-xl shadow-yellow-600/30 flex-shrink-0">
            🎓
          </div>
          <div>
            <p className="text-yellow-500 text-sm font-bold tracking-[0.3em] uppercase mb-1">ZEP Academy</p>
            <h2 className="text-3xl md:text-4xl font-black text-yellow-400 tracking-wider">
              BUILDING FUTURES | NURTURING MINDS
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Industry-leading engineering education programs designed to equip professionals with the skills to excel in complex project environments.
            </p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-xl border border-yellow-600/20 bg-white/5 p-6 hover:border-yellow-500/50 hover:bg-yellow-900/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${levelColor[course.level]}`}>
                  {course.level}
                </span>
                <span className="text-gray-500 text-xs">{course.duration}</span>
              </div>
              <h3 className="text-white font-bold text-base group-hover:text-yellow-300 transition-colors">{course.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-black rounded-full uppercase tracking-widest text-sm hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-xl shadow-yellow-600/30"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}