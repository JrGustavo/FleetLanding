"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter';

export default function Header() {
    return (
        <div className="flex flex-col items-center justify-center bg-background text-foreground py-12">
            <a href="#" className="mb-8 text-sm font-medium hover:underline flex items-center">
                Blog Fleet 
                <ArrowUpRight className="ml-1 h-4 w-4"/>
            </a>

            <h1 className="text-7xl font-bold mb-8">
                The Vertical AI For{' '}
                <span className="text-primary-700">
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

            Fleet permite a las instituciones financieras lanzar experiencias personalizadas para sus consumidores a través de modelos (LLMs).  </p>
            <Button
                className="bg-primary-700 text-white hover:bg-primary-700 px-6 py-2  text-lg font-medium">
               Agendar demo
            </Button>
        </div>
    )
}