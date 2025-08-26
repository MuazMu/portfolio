export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      color: "text-blue-400",
      dotColor: "bg-blue-400",
      skills: ["React", "Next.js", "HTML", "CSS"],
    },
    {
      title: "Programming Languages",
      color: "text-purple-400",
      dotColor: "bg-purple-400",
      skills: ["JavaScript", "Python", "C++", "C"],
    },
    {
      title: "System & DevOps",
      color: "text-green-400",
      dotColor: "bg-green-400",
      skills: ["Linux", "Docker"],
    },
    {
      title: "AI & Engineering",
      color: "text-orange-400",
      dotColor: "bg-orange-400",
      skills: ["Context Engineering", "Prompt Engineering"],
    },
    {
      title: "Tools & Version Control",
      color: "text-cyan-400",
      dotColor: "bg-cyan-400",
      skills: ["Git", "GitHub"],
    },
  ]

  return (
    <section id="skills" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 text-lg mb-6">Technologies and tools I use to bring ideas to life</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${category.dotColor}`}></div>
                <h3 className={`text-lg font-semibold ${category.color}`}>{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-full text-sm font-medium border border-slate-600/50 hover:bg-slate-600/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
