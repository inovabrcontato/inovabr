import AppLayout from '@/Layouts/AppLayout';

import Navbar from '@/Components/Navbar'
import DataScience from '@/assets/inicio/data_science.svg' // ← importa como módulo
import Footer from '@/Components/Footer'

export default function Inicio() {
  return (

    <div>
        <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Columna de texto (ocupa 2/3 del espacio) */}
        <div className="md:col-span-2 bg-green-100 border border-green-300 rounded p-4 text-green-800">
            
            <h1 className="text-3xl font-bold text-green-900">
                🚀 Bem-vindo à Inova BR
            </h1>

            <p className="text-green-800 text-lg gap-4 p-4">Na Inova BR, a inovação está em nosso DNA. Somos uma empresa comprometida em oferecer soluções técnicas de ponta, projetadas para aprimorar a presença digital de negócios modernos. Nosso nome não é coincidência: Inova representa a busca constante por transformação, eficiência e excelência.</p>
            <p className="text-green-800 text-lg gap-4 p-4">Somos especialistas em desenvolvimento de sites, gestão de mídias sociais, marketing digital e conectividade estratégica. Combinamos criatividade com tecnologia para construir pontes fortes entre marcas e pessoas, criando experiências digitais que realmente conectam.</p>
            <h3 className="text-xl font-semibold text-green-700">🌐 Creamos sitios web que hablan el idioma de tu marca.</h3>
        </div>

        {/* Columna de imagen (1/3 del espacio) */}
        <div className="flex justify-center items-center">
          <img
            src={DataScience}
            alt="Imagen decorativa"
            className="rounded shadow-md max-w-full h-auto"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

