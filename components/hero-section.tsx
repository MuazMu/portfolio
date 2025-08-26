import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="px-6 py-16 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hi, I am
              <br />
              <span className="text-blue-400">{"{"}</span>
              <span className="text-white">Muaz Abdulkahfur</span>
              <span className="text-blue-400">{"}"}</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
              I'm a software engineer specializing in full-stack development with JavaScript, React, and Next.js. I also
              work with Python, C++, and focus on AI prompt engineering and context engineering.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">Download CV</Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-2 bg-transparent"
              >
                Start Project
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 scale-150"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden">
              <Image
                src="/professional-headshot-of-a-young-man-with-dark-hai.png"
                alt="Muaz Abdulkahfur"
                width={320}
                height={320}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
