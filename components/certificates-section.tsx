import { Card } from "@/components/ui/card"
import Image from "next/image"

export function CertificatesSection() {
  return (
    <section id="certificates" className="px-8 py-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-4">Certificates</h2>
        <p className="text-slate-400 mb-8">
          Check out some of my certificates, ranging from Web Development to AI Engineering.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 p-4">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-16 bg-slate-700 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/certificate-document-with-official-seal.png"
                  alt="Web Development Certificate"
                  width={80}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-1">Full Stack Web Development</h4>
                <p className="text-slate-400 text-sm">Meta • 2024</p>
                <p className="text-slate-500 text-sm mt-2">React, Node.js, Database Design</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-4">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-16 bg-slate-700 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/professional-certificate-with-blue-header.png"
                  alt="AI Engineering Certificate"
                  width={80}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-1">AI Engineering Specialization</h4>
                <p className="text-slate-400 text-sm">Stanford • 2024</p>
                <p className="text-slate-500 text-sm mt-2">Prompt Engineering, Context Engineering</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-4">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-white font-bold">C++</span>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-1">Advanced C++ Programming</h4>
                <p className="text-slate-400 text-sm">MIT • 2023</p>
                <p className="text-slate-500 text-sm mt-2">Systems Programming, Linux Development</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
