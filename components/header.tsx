import Link from "next/link"

export function Header() {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-blue-400 text-xl font-semibold">
            Muaz Abdulkhafur
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
              About me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
