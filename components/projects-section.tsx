"use client"

import { useState } from "react"
import { ProjectModal } from "./project-modal"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: "Event Management and Ticketing System",
      description: "Comprehensive event management platform with ticketing, analytics, and revenue tracking",
      mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event1-sRboVu6zAEFaXhUYtkBPDm6kNQDSQP.png",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event1-sRboVu6zAEFaXhUYtkBPDm6kNQDSQP.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event2-qpRq7JdF5nhdssLAq4sBLasodlKRsX.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event3-yCBM68d55IY2igHJkMjrL0fQdmVLgV.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event4-4ODa3zpaMy5Z8akTHNClDmrt0RyAll.png",
      ],
      technologies: "React, Next.js, Node.js, PostgreSQL, Stripe API",
      link: "https://eventify.dablietech.club/",
    },
    {
      title: "Startup Innovation",
      description: "Connect with revolutionary startups, talented entrepreneurs, and visionary investors",
      mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profi-amrfe6AFfIIrKrkfXS95e5yOQYx9Wm.png",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profi-amrfe6AFfIIrKrkfXS95e5yOQYx9Wm.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profi2-bQ3uLUFfNtF0GWAp27GIj5WE96y8hm.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profi3-DrByTn6GDIuNQmrxUZLggOpXVxf2lj.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profi4-83J5UeOTu8BmINDTAoidiswWe30QSd.png",
      ],
      technologies: "React, Next.js, AI Integration, PostgreSQL",
      link: "https://dablietechstartup.vercel.app/",
    },
    {
      title: "Dynamic Websites",
      description: "Professional IT solutions and services website for enterprise clients",
      mainImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baselineprofi1-bdgeAM6H2MCMgNYX9TJA3kFf1iEala.png",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baselineprofi1-bdgeAM6H2MCMgNYX9TJA3kFf1iEala.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baselineprofi2-QwPNvKexKMkvegofdrjkETwJASWc0x.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baselineprof3-GfYK8QwguRL9ekablmHZfSJqt0cjej.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baselinprof-Zbb2vnSlHCrGaqID0ncwpzqIewN1XE.png",
      ],
      technologies: "HTML, CSS, JavaScript, PHP, MySQL",
      link: "https://www.baselineplc.com/",
    },
    {
      title: "GOJO",
      description: "Booking and Accommodation System",
      mainImage: "/ecommerce-platform-homepage.png",
      images: [
        "/ecommerce-platform-homepage.png",
        "/ecommerce-product-catalog.png",
        "/ecommerce-shopping-cart.png",
        "/ecommerce-checkout-process.png",
      ],
      technologies: "React, Node.js, MongoDB, Stripe API",
      link: "#",
    },
    {
      title: "Movie Chief",
      description: "Movie and TV Shows Trailers and Information Site",
      mainImage: "/data-analytics-dashboard.png",
      images: [
        "/data-analytics-dashboard.png",
        "/data-analytics-charts.png",
        "/data-analytics-reports.png",
        "/data-analytics-settings.png",
      ],
      technologies: "Python, Django, PostgreSQL, Movie API",
      link: "#",
    },
    {
      title: "E-commerce",
      description: "Ecommerce Solution for Wholesalers and Retailers",
      mainImage: "/ml-model-trainer-interface.png",
      images: [
        "/ml-model-trainer-interface.png",
        "/ml-model-trainer-dashboard.png",
        "/ml-model-trainer-results.png",
        "/ml-model-trainer-settings.png",
      ],
      technologies: "React, Next.js, Stripe, PostgreSQL",
      link: "#",
    },
    {
      title: "Notes",
      description: "Note Taking Application",
      mainImage: "/task-management-dashboard.png",
      images: [
        "/task-management-dashboard.png",
        "/task-management-kanban.png",
        "/task-management-calendar.png",
        "/task-management-mobile.png",
      ],
      technologies: "React Native, Node.js, MongoDB",
      link: "#",
    },
  ]

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="px-8 py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-slate-400 mb-2 max-w-3xl mx-auto">
          A showcase of my recent work spanning web applications, mobile apps, and full-stack solutions
        </p>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-continuous space-x-8">
            {/* First set of projects */}
            {projects.map((project, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-80 bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img
                    src={project.mainImage || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.link}
                  </a>
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {projects.map((project, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-80 bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img
                    src={project.mainImage || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal isOpen={!!selectedProject} onClose={closeModal} project={selectedProject} />
    </section>
  )
}
