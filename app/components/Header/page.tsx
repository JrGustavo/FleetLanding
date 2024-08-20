"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter';

export default function Header() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground ">
            <a href="#" className="mb-8 text-sm font-medium hover:underline flex items-center">
                Blog Announcing $25m in Series A
                <ArrowUpRight className="ml-1 h-4 w-4"/>
            </a>

            <h1 className="text-7xl font-bold">
                The Vertical AI For{' '}
                <span className="text-[#0070F3]">
                        <Typewriter
                            words={['Banking', 'Fintech', 'Lenders']}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
            </h1>

            <p className="text-xl text-center mb-8 max-w-2xl">
                And you need unparalleled tools to perfect every detail.
            </p>

            <Button
                className="bg-foreground text-background hover:bg-foreground/90 px-6 py-2 rounded-full text-lg font-medium">
               Agendar demo
            </Button>
        </div>
    )
}