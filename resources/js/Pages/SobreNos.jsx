import App from '@/Layouts/App';

import Navbar from '@/Components/Navbar'
import ProjectsImage from '@/assets/sobrenos/projects_image.svg' // ← importa como módulo
import Footer from '@/Components/Footer'
import ServiceCard from '@/Components/ServiceCard'
import { FaUsers } from 'react-icons/fa'



export default function SobreNos() {
  return (

    <div class="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <section className="md:col-span-4 py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 justify-center">
                    {/* <img
                        src={ProjectsImage}
                        alt="Imagen decorativa"
                        className="rounded shadow-md max-w-full h-auto transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                    /> */}
                    <ServiceCard
                        icon={<FaUsers className="" />}
                        title="Sobre Nós"
                        description="Na Inova BR, não pensamos apenas em tecnologia: pensamos em pessoas, ideias e possibilidades. Nossa paixão é transformar visões em produtos digitais reais, úteis e sustentáveis. Somos especialistas em transformar ideias em realidade, guiando nossos clientes desde a inspiração inicial até o lançamento final. Todo projeto começa com uma conversa, com a escuta ativa do que sua marca deseja dizer e alcançar. A partir daí, combinamos criatividade, estratégia e expertise técnica para construir soluções únicas e totalmente adaptadas ao seu negócio."
                        leyenda="📈 Impulsionamos sua presença digital para o futuro."
                    />
                </div>
            </section>

      </div>
      <Footer />
    </div>
  )
}

