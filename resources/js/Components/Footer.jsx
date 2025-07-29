import { Link } from '@inertiajs/react'
import LogoFooter from '@/assets/logo-footer.png'
import WhatsAppButton from '@/Components/WhatsAppButton'

export default function Footer() {
  return (
    <footer className="bg-indigoCustom text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 text-center md:text-left">
        
        {/* Columna 1: Logo o imagen */}
        <div>
          <img
            src={LogoFooter}
            alt="Logo Inova BR"
            className="h-[50px] w-auto transition duration-300 ease-in-out"
          />
        </div>

        {/* Columna 2: Enlaces */}
        <div className="space-y-2">
            <Link
                href="/começar"
                className="block hover:underline text-sm"
            >
                Começar
            </Link>
            <Link
                href="/sobreNos"
                className="block hover:underline text-sm"
            >
                Sobre Nós
            </Link>
            <Link
                href="/serviços"
                className="block hover:underline text-sm"
            >
                Serviços
            </Link>
            <Link
                href="/contato"
                className="block hover:underline text-sm"
            >
                Contato
            </Link>
        </div>

        {/* Columna 3: Información de contacto */}
        <div className="text-sm space-y-1">
          <p>CPF: 029.298.649-15</p>
          <p>Email: inovabr.contato@gmail.com</p>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  )
}