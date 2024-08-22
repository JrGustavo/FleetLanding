import { BoxIcon, ZapIcon, CheckIcon } from 'lucide-react'
import Image from "next/image"

export default function Beneficios() {
  return (
    <div className="relative flex items-center justify-center bg-[#00249C] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">Defensa invulnerable</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <BoxIcon className="w-5 h-5 md:w-6 md:h-6" />,
              title: "Sandbox Fleet",
              description:
                "Ingresa al espacio de pruebas de Fleet donde puedes realizar diferentes integraciones con nuestro modelo LLM antes de lanzar a producción. ",
            },
            {
              icon: <ZapIcon className="w-5 h-5 md:w-6 md:h-6" />,
              title: "Acceso privado",
              description:
                "Nuestra infraestructura habilita un entorno privado donde los datos están protegidos por rigurosos controles de seguridad.",
            },
            {
              icon: <CheckIcon className="w-5 h-5 md:w-6 md:h-6" />,
              title: "Aislamiento Fleet",
              description:
                "Los entornos Cloud de Fleet cuentan con diferentes certificaciones que garantizan el aislamiento de los datos sin compartirlos. ",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h2 className="text-lg md:text-xl font-semibold ml-2">{benefit.title}</h2>
              </div>
              <p className="text-sm md:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}