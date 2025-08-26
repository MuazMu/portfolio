"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    images: string[]
    technologies: string
    link: string
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
      setCurrentImageIndex(0)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const nextImage = () => {
    if (project && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (project && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-2 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="bg-slate-900/95 rounded-lg p-6">
          {/* Project Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-2">{project.description}</p>
            <p className="text-blue-400 text-sm">{project.technologies}</p>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <img
              src={project.images[currentImageIndex] || "/placeholder.svg?height=400&width=600"}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover rounded-lg"
            />

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {project.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-blue-500" : "bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Link */}
          <div className="mt-6 text-center">
            <a
              href={project.link}
              className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
