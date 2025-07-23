import Navbar from '@/Components/Navbar'
import Inicio from '@/Pages/Inicio'
import Footer from '@/Components/Footer'

export default function App({children}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-1">
        {/*<Inicio />*/}
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  )
}
