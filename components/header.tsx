import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-end space-x-6">
          <li>
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-400 transition-colors">
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-blue-400 transition-colors">
              Experiência
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#education" className="hover:text-blue-400 transition-colors">
              Educação
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

