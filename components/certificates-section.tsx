"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const certificates = [
    {
      id: 1,
      title: "Certified in Cybersecurity",
      issuer: "ISC²",
      date: "2024-2027",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/isc2_cert-EE3vF6imEbktRlyyt8ibUUo6tPknrV.png",
    },
    {
      id: 2,
      title: "Cybersecurity Job Simulation - Malware Response",
      issuer: "Forage/Telstra",
      date: "January 2025",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telstra_cert-Gg5paGrRioNGe9DYoS44B2XFXUBip0.png",
    },
    {
      id: 3,
      title: "Cybersecurity Job Simulation - Phishing",
      issuer: "Forage/Mastercard",
      date: "January 2025",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cert_master-xIFMtLVvuaMHWD4ghJMVUBKN3WKhIk.png",
    },
  ]

  return (
    <>
      <section id="certificates" className="px-8 py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-4">Certificates</h2>
          <p className="text-slate-400 mb-8">
            Check out some of my certificates, ranging from Cybersecurity to Professional Development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="bg-slate-800/50 border-slate-700 p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                onClick={() => setSelectedCertificate(cert.image)}
              >
                <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <h4 className="text-white font-medium mb-1 text-sm">{cert.title}</h4>
                <p className="text-slate-400 text-xs">
                  {cert.issuer} • {cert.date}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
            <Image
              src={selectedCertificate || "/placeholder.svg"}
              alt="Certificate"
              width={800}
              height={600}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  )
}
