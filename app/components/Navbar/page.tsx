"use client"

import { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b">
      
      <div className="flex items-center">
      <Image
          src="/Logo/FleetLogo.jpg" // Reemplaza con la ruta correcta de tu logo
          alt="Fleet Logo"
          width={50} // Ajusta el tamaño según sea necesario
          height={50}
          className="h-8 w-8"
        />

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
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="h-6 w-6"
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
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <a href="#" className="block px-4 py-2 text-primary-400 hover:text-gray-900">
            Nosotros
          </a>
          <a href="#" className="block px-4 py-2 text-primary-400 hover:text-gray-900">
            Documentación
          </a>
          <a href="#" className="block px-4 py-2 text-primary-400 hover:text-gray-900">
            Precios
          </a>
          <Button variant="outline" className="w-full bg-primary-700 text-white hover:bg-gray-800">
            Iniciar sesión
          </Button>
        </div>
      )}
    </nav>
  );
}