

import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import ServiceCard from '@/Components/ServiceCard'
import { FaCode, FaBullhorn } from 'react-icons/fa'

export default function Servicios() {
  return (

    <div class="min-h-screen flex flex-col">
        <Navbar />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 p-4">

        <section className="md:col-span-4 py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                <ServiceCard
                    icon={<FaCode />}
                    title="Desenvolvimento Web"
                    description="Criamos sites personalizados que refletem a essência da sua marca e se adaptam perfeitamente aos seus objetivos. Utilizamos tecnologias de ponta para garantir desempenho, escalabilidade e design moderno. Da primeira linha de código ao suporte pós-lançamento, apoiamos você em todo o processo para garantir que sua presença online seja robusta e eficaz."
                    leyenda="Inovação + experiência + suporte contínuo. Seu projeto, uma realidade."
                />
                <ServiceCard
                    icon={<FaBullhorn />}
                    title="Marketing Digital"
                    description="Impulsionamos sua marca com campanhas eficazes de Google Ads e Facebook Ads, projetadas para posicionar você no topo dos resultados de busca e atrair seu público ideal. Nossa estratégia combina segmentação inteligente, design visual atraente e análise constante para maximizar seus resultados."
                    leyenda="Aumente sua visibilidade. Conquiste clientes. Cresça com dados. Publicidade digital com impacto real."
                />
                {/* Agregá más tarjetas si lo necesitás */}
            </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

