import { ArrowRightIcon } from "lucide-react";

export default function SearchPage() {
    return (
        <div className="px-4"> {/* Espacio a los lados */}
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src="/Video/FleetVideo1.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
                    <div className="flex items-center w-full max-w-md p-2 bg-white rounded-full shadow-lg">
                        <input
                            type="text"
                            placeholder="Crear una segmentación de clientes."
                            className="flex-1 px-4 py-2 text-lg bg-transparent border-none focus:outline-none"
                        />
                        <button className="p-2 text-gray-500 hover:text-gray-700">
                            <ArrowRightIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}