"use client"

import { useState } from "react"
import { ImageModal } from "./image-modal"

export function ProjectsSection() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt })
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <section id="projects" className="px-8 py-16">
      <div className="max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
        <p className="text-slate-400 mb-8">
          Check out some of my projects, meticulously crafted with modern technologies.
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-6">
            {/* Project 1 */}
            <div className="flex-shrink-0 w-80 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h4 className="text-white text-lg font-medium mb-3">AI Chat Application</h4>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div
                  className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal("/ai-chat-application-screenshot-1.png", "AI Chat Application - Screenshot 1")}
                >
                  Image 1
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-purple-500 to-pink-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal("/ai-chat-application-screenshot-2.png", "AI Chat Application - Screenshot 2")}
                >
                  Image 2
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-green-500 to-blue-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal("/ai-chat-application-screenshot-3.png", "AI Chat Application - Screenshot 3")}
                >
                  Image 3
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal("/ai-chat-application-screenshot-4.png", "AI Chat Application - Screenshot 4")}
                >
                  Image 4
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-3">React, Next.js, OpenAI API</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="flex-shrink-0 w-80 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h4 className="text-white text-lg font-medium mb-3">E-commerce Platform</h4>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div
                  className="aspect-square bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openModal("/placeholder.svg?height=400&width=400", "E-commerce Platform - Screenshot 1")
                  }
                >
                  Image 1
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-violet-500 to-purple-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openModal("/placeholder.svg?height=400&width=400", "E-commerce Platform - Screenshot 2")
                  }
                >
                  Image 2
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-emerald-500 to-teal-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openModal("/placeholder.svg?height=400&width=400", "E-commerce Platform - Screenshot 3")
                  }
                >
                  Image 3
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-rose-500 to-pink-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openModal("/placeholder.svg?height=400&width=400", "E-commerce Platform - Screenshot 4")
                  }
                >
                  Image 4
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-3">Python, Django, PostgreSQL</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="flex-shrink-0 w-80 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h4 className="text-white text-lg font-medium mb-3">Data Analytics Dashboard</h4>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div
                  className="aspect-square bg-gradient-to-br from-yellow-500 to-orange-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openModal("/placeholder.svg?height=400&width=400", "Data Analytics Dashboard - Screenshot 1")
                  }
                >
                  Image 1
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openModal("/placeholder.svg?height=400&width=400", "Data Analytics Dashboard - Screenshot 2")
                  }
                >
                  Image 2
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-teal-500 to-cyan-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openModal("/placeholder.svg?height=400&width=400", "Data Analytics Dashboard - Screenshot 3")
                  }
                >
                  Image 3
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-pink-500 to-rose-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    openModal("/placeholder.svg?height=400&width=400", "Data Analytics Dashboard - Screenshot 4")
                  }
                >
                  Image 4
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-3">C++, Linux, Data Visualization</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                View Project →
              </a>
            </div>

            {/* Project 4 */}
            <div className="flex-shrink-0 w-80 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h4 className="text-white text-lg font-medium mb-3">ML Model Trainer</h4>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div
                  className="aspect-square bg-gradient-to-br from-red-500 to-pink-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal("/placeholder.svg?height=400&width=400", "ML Model Trainer - Screenshot 1")}
                >
                  Image 1
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal("/placeholder.svg?height=400&width=400", "ML Model Trainer - Screenshot 2")}
                >
                  Image 2
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-green-500 to-emerald-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal("/placeholder.svg?height=400&width=400", "ML Model Trainer - Screenshot 3")}
                >
                  Image 3
                </div>
                <div
                  className="aspect-square bg-gradient-to-br from-purple-500 to-violet-600 rounded flex items-center justify-center text-sm text-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal("/placeholder.svg?height=400&width=400", "ML Model Trainer - Screenshot 4")}
                >
                  Image 4
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-3">Python, Context Engineering</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>

      {modalImage && (
        <ImageModal isOpen={!!modalImage} onClose={closeModal} imageSrc={modalImage.src} imageAlt={modalImage.alt} />
      )}
    </section>
  )
}
