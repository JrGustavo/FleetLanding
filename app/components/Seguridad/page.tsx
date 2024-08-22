"use client"


import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload } from 'lucide-react'

export default function Seguridad() {
  const [isUploading, setIsUploading] = useState(false)
  const [certifications, setCertifications] = useState([
    { name: 'ISO', image: '/placeholder.svg?height=50&width=50' },
    { name: 'GDPR', image: '/placeholder.svg?height=50&width=50' },
    { name: 'SOC2', image: '/placeholder.svg?height=50&width=50' },
  ])

  useEffect(() => {
    if (isUploading) {
      const timer = setTimeout(() => setIsUploading(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isUploading])

  const handleUpload = () => {
    setIsUploading(true)
    // Here you would typically handle the actual file upload
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto">
      <div className="flex-1">
        <h2 className="text-sm text-gray-600 mb-2">Bank level security</h2>
        <h1 className="text-4xl font-bold mb-4">Built with your privacy in mind.</h1>
        <p className="text-gray-600 mb-6">
          Compliant with GDPR and certified for ISO 27001:2022 and SOC 2 Type I, ensuring the highest standards of
          privacy and security.
        </p>
        <Button variant="outline">Read more</Button>
        <div className="flex gap-4 mt-8">
          {certifications.map((cert, index) => (
            <img key={index} src={cert.image} alt={cert.name} className="w-12 h-12 object-contain" />
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
            <span className="text-gray-600">Upload document</span>
          </div>
        </Card>
      </div>
    </div>
  )
}