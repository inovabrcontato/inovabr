import Navbar from '@/Components/Navbar'

export default function AppLayout({ header, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar u otro contenido arriba */}
      <header>
        {/* Tu componente de navegación */}
        
      </header>

      {/* Contenido principal (crece según el contenido disponible) */}
      <main className="flex-1">
        {/* Tu componente principal o página */}
      </main>

      {/* Footer pegado al fondo */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2025 Inova BR — CPF: 000.000.000-00 — contacto@inovabr.com</p>
      </footer>
    </div>
  )
}