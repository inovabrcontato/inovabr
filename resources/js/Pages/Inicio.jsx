import Navbar from '@/Components/Navbar'
import DataScience from '@/assets/inicio/data_science.svg' // ← importa como módulo
import Footer from '@/Components/Footer'
import ServiceCard from '@/Components/ServiceCard'
import { FaRocket, FaBullhorn } from 'react-icons/fa'
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function Inicio() {
  return (

    <div class="min-h-screen flex flex-col">
        <Navbar />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-3/4">
            <section className="md:col-span-4 py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 justify-center">
                    <ServiceCard
                        icon={<FaRocket className="" />}
                        title="Bem-vindo à Inova BR"
                        description="Na Inova BR, a inovação está em nosso DNA. Somos uma empresa comprometida em oferecer soluções técnicas de ponta, projetadas para aprimorar a presença digital de negócios modernos. Nosso nome não é coincidência: Inova representa a busca constante por transformação, eficiência e excelência. Inovação + experiência + suporte contínuo. Seu projeto, uma realidade. Somos especialistas em desenvolvimento de sites, gestão de mídias sociais, marketing digital e conectividade estratégica. Combinamos criatividade com tecnologia para construir pontes fortes entre marcas e pessoas, criando experiências digitais que realmente conectam. "
                        leyenda="🌐 Creamos sitios web que hablan el idioma de tu marca."
                    />
                    {/* <img
                        src={DataScience}
                        alt="Imagen decorativa"
                        className="rounded shadow-md max-w-full h-auto transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                    /> */}
                </div>
            </section>
      </div>
      <Footer />
    </div>
  )
}

