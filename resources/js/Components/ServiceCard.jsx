export default function ServiceCard({ icon, title, description, leyenda }) {
  return (
    <div className="bg-white rounded-lg p-6 text-center transform transition-transform duration-300 ease-in-out shadow-md hover:-translate-y-2 hover:shadow-2xl hover:rotate-[0.0deg] hover:shadow-indigoCustom " >
      <div className="text-5xl mb-4 text-indigo-800 drop-shadow-md">{icon}</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 text-base mb-4">{description}</p>
      {leyenda && <p className="text-gray-500 text-sm italic">{leyenda}</p>}
    </div>
  )
}
