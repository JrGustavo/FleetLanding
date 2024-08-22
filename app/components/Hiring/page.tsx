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
    '/Services/Fintech.jpg',
    '/Services/Fintech2.jpg',
    '/Services/Fintech3.jpg',
    '/Services/Fintech4.jpg',
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
            <div key={index} className="embla__slide flex-[0_0_100%] h-full">
              <Image
                src="/Services/Fintech.jpg"
                alt={`Slide ${index + 1}`}
                width={800} // Adjust width as needed
                height={600} // Adjust height as needed
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}