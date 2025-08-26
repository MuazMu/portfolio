import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="w-full max-w-6xl mx-auto">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificatesSection />
        <SkillsSection />
      </main>
    </div>
  )
}
