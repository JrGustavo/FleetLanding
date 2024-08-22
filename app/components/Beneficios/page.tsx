import { BoxIcon, ZapIcon, CheckIcon } from 'lucide-react'
import Image from "next/image"

export default function Beneficios() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#f5e6d3] overflow-hidden">
      <Image
        src="/Benefits/FleetGradient.jpg"
        height={100}
        width={100}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-[#4a4a4a]">
        <p className="text-base md:text-lg mb-2">Benefits</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Enhancing legal operations.</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <BoxIcon className="w-5 h-5 md:w-6 md:h-6" />,
              title: "Unlocked Knowledge",
              description:
                "Surface previous work, policies, and templates from the depths of your organization.",
            },
            {
              icon: <ZapIcon className="w-5 h-5 md:w-6 md:h-6" />,
              title: "Increased Productivity",
              description:
                "Dig deeper into your research. Proof-read in a moment. Consider more factors.",
            },
            {
              icon: <CheckIcon className="w-5 h-5 md:w-6 md:h-6" />,
              title: "Improved Outcomes",
              description:
                "Breeze through tedious tasks and spend your time on creating value for your clients.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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