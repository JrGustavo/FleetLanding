'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const testimonials = [
    {
        id: 1,
        quote: "Leya has proven to be the right tool for our objectives and needs, both in terms of efficiency and security.",
        name: "Andy Ramos",
        title: "Partner, Pérez-Llorca",
        image: "/placeholder.svg?height=600&width=400"
    },
    {
        id: 2,
        quote: "The AI tool develops at breathtaking pace and the roadmap for the future is full of new features.",
        name: "Samuli Simojoki",
        title: "Chair of the Board, Borenius",
        image: "/placeholder.svg?height=600&width=400"
    },
    {
        id: 3,
        quote: "Leya's capabilities align perfectly with our firm's vision of harnessing technology",
        name: "Pedro Rueda",
        title: "Partner, Araoz & Rueda",
        image: "/placeholder.svg?height=600&width=400"
    }
]

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Testimonials</h2>
                    <Button variant="outline">See all</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[400px] md:h-[600px]">
                        <Image
                            src={testimonials[activeTestimonial].image}
                            alt={testimonials[activeTestimonial].name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <blockquote className="text-2xl md:text-4xl font-semibold mb-6">
                            "{testimonials[activeTestimonial].quote}"
                        </blockquote>
                        <p className="text-xl font-semibold">{testimonials[activeTestimonial].name}</p>
                        <p className="text-muted-foreground">{testimonials[activeTestimonial].title}</p>
                        <Button variant="outline" className="mt-4">Read case</Button>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === activeTestimonial ? 'bg-foreground' : 'bg-muted'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className={index === activeTestimonial ? 'opacity-100' : 'opacity-50'}>
                            <p className="text-sm mb-2">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-2"
                                />
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}