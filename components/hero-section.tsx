import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="px-4 md:px-6 py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              Hi, I am
              <br />
              <span className="text-blue-400">{"{"}</span>
              <span className="text-white">Muaz Abdulkahfur</span>
              <span className="text-blue-400">{"}"}</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              I'm a software engineer specializing in full-stack development with JavaScript, React, and Next.js. I also
              work with Python, C++, and focus on AI prompt engineering and context engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full sm:w-auto">
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-2 bg-transparent w-full sm:w-auto"
              >
                Start Project
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 scale-150"></div>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto">
              <Image
                src="/professional-headshot-of-a-young-man-with-dark-hai.png"
                alt="Muaz Abdulkahfur"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
