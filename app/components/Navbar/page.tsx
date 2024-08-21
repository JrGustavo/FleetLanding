import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <svg
          className=" h-8 w-8 text-black"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 19V5" />
          <path d="M10 19V6.2" />
          <path d="M14 19v-7.4" />
          <path d="M18 5v4.6" />
        </svg>
        <span className="ml-2 text-xl font-semibold">Fleet</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-primary-400 hover:text-gray-900">
          Nosotros
        </a>
        <a href="#" className="text-primary-400 hover:text-gray-900">
          Documentación
        </a>
        <a href="#" className="text-primary-400 hover:text-gray-900">
          Precios
        </a>
        <Button variant="outline" className="bg-primary-700 text-white hover:bg-gray-800">
          Iniciar sesión
        </Button>
      </div>
      <div className="md:hidden">
        <Button variant="ghost" size="icon">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </nav>
  )
}