export function AboutSection() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">About me</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <div className="flex-1">
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                Muaz Abdulkahfur is a passionate software engineer and full-stack developer with expertise in modern web
                technologies. I specialize in JavaScript, React, and Next.js for frontend development, while also
                working with Python and C++ for backend solutions. My current focus includes AI engineering,
                specifically context engineering and prompt engineering, combining traditional programming skills with
                cutting-edge AI technologies to build innovative solutions.
              </p>
            </div>
            <div className="w-16 h-16 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto md:mx-0 flex-shrink-0">
              <span className="text-2xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
