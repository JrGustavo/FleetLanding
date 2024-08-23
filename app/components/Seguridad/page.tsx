"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload } from 'lucide-react'
import Image from "next/image";

export default function Seguridad() {
  const [isUploading, setIsUploading] = useState(false)
  const [certifications, setCertifications] = useState([
    { name: 'PCI', image: '/Seguridad/PCI.png' },
    { name: 'ISO', image: '/Seguridad/ISO.png' },
  ])

  useEffect(() => {
    if (isUploading) {
      const timer = setTimeout(() => setIsUploading(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isUploading])

  const handleUpload = () => {
    setIsUploading(true)
    // Aquí manejarías la carga de archivos real
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto">
      <div className="flex-1">
        <h2 className="text-sm text-primary-400 mb-2">Seguridad bancaria</h2>
        <h1 className="text-4xl font-bold mb-4">Creada pensando en su privacidad</h1>
        <p className="text-gray-600 mb-6">
          Estamos certificados en ISO 27001:2022 y PCI DSS, garantizando los más altos estándares de privacidad y seguridad.
        </p>
        <Button variant="outline">Leer Más</Button>
        <div className="flex gap-4 mt-8">
          {certifications.map((cert, index) => (
            <Image 
            height="100"
            weight="100"
            key={index} 
            src={cert.image} 
            alt={cert.name} 
            className="w-12 h-12 object-contain" />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <Card className="p-6">
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
            onClick={handleUpload}
          >
            <Upload
              className={`w-12 h-12 text-gray-400 mb-4 ${isUploading ? 'animate-bounce' : ''}`}
            />
            <span className="text-gray-600">Cargar datos</span>
          </div>
        </Card>
      </div>
    </div>
  )
}