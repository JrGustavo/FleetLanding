'use client'

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
    '/FintechWallpaper.jpg?height=600&width=400&text=Image+1',
    '/FintechWallpaper.jpg?height=600&width=400&text=Image+1',
    '/FintechWallpaper.jpg?height=600&width=400&text=Image+1',
    '/FintechWallpaper.jpg?height=600&width=400&text=Image+1',
]

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} z-10`}
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        >
            <ChevronRight className="w-8 h-8 text-white" />
        </div>
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} z-10`}
            style={{ ...style, display: "block", left: "10px" }}
            onClick={onClick}
        >
            <ChevronLeft className="w-8 h-8 text-white" />
        </div>
    );
}

export default function Component() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="relative h-screen">
                        <Image
                            src="/Plataforma/FintechWallpaper.jpg"
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        {index === 1 && (
                            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-black bg-opacity-40 text-white">
                                <h2 className="text-4xl font-bold mb-2">Open Positions</h2>
                                <p className="text-xl mb-4">Join our team in rethinking legal work.</p>
                                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                                    Explore roles
                                </Button>
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    )
}