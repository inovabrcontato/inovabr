import { Link } from '@inertiajs/react'
import { useState } from 'react'
import logo from '@/assets/logo.png' // ← importa como módulo
import logoHover from '@/assets/logo-hover.png'

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center space-x-10">
          <Link
            href="/começar"
            className="text-indigoCustom dark:text-white font-semibold hover:text-greenCustom transition transition-colors duration-200"
          >
            Começar
          </Link>
          <Link
            href="/sobreNos"
            className="text-indigoCustom dark:text-white font-semibold hover:text-greenCustom transition"
          >
            Sobre Nós
          </Link>

          <img
            src={isHovered ? logoHover : logo}
            alt="Logo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="h-[150px] w-auto transition duration-300 ease-in-out"
          />

          <Link
            href="/serviços"
            className="text-indigoCustom dark:text-white font-semibold hover:text-greenCustom transition"
          >
            Serviços
          </Link>
          <Link
            href="/contato"
            className="text-indigoCustom dark:text-white font-semibold hover:text-greenCustom transition"
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  )
}
