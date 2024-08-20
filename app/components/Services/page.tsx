"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

const carouselItems = [
    {
        image: '/Services/Fintech.jpg',
        title: 'Top law firm enhances accuracy and client value delivery',
        stat: '95%',
        description: 'FASTER CONTRACT ANALYSIS'
    },
    {
        image: '/Services/Fintech.jpg',
        title: 'Leading alternatives investor augments diligence',
        stat: '5x',
        description: 'MORE DATA DILIGENCED'
    },
    {
        image: '/Services/Fintech.jpg',
        title: 'Fortune 100 company adds thousands of hours of FTE capacity',
        stat: '5-10+',
        description: 'HOURS SAVED PER USER PER WEEK'
    },
    {
        image: '/Services/Fintech.jpg',
        title: 'Global manufacturer transforms procurement process',
        stat: '137%',
        description: 'INCREASE IN PRODUCTIVITY'
    }
];

export default function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                    Stop experimenting with AI.
                    <br />
                    Start working with it.
                </h2>
                <p className="text-xl text-center text-muted-foreground mb-12">
                    Create value on day one.
                </p>

                <Slider {...settings} className="mb-8">
                    {carouselItems.map((item, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-card rounded-lg shadow-md overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-4xl font-bold mb-1">{item.stat}</p>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}