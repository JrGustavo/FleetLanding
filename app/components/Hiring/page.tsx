'use client'

import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hiring() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true })
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (emblaApi) {
        const scrollDelta = e.deltaY > 0 ? 1 : -1
        const newIndex = emblaApi.selectedScrollSnap() + scrollDelta
        emblaApi.scrollTo(newIndex)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel)
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [emblaApi])

  const images = [
    '/Hiring/sala.jpg',
    '/Hiring/sala2.jpg',
    '/Hiring/sala3.jpg',
  ]

  return (
    <div className="relative h-screen overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-black text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Open Positions</h1>
        <p className="text-xl md:text-2xl mb-8">Join our team in rethinking legal work.</p>
        <Button
          variant="outline"
          className="bg-white text-black border-white hover:bg-primary-700 hover:text-white"
        >
          Ver oportunidades
        </Button>
      </div>
      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div key={index} className="embla__slide flex-[0_0_70%] h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={600} // Ajuste el ancho para una mejor visualización
                height={400} // Ajuste la altura para una mejor visualización
                className="w-full h-full object-cover"
                quality={100} // Asegura alta calidad de imagen
                priority // Carga la imagen como alta prioridad
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}