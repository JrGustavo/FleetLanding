import React from 'react'
import { Button } from '@/components/ui/button'
import { Grid3x3Icon } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Be among the leading firms using Hebbia
                        </h2>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="mb-4">
                            Matrix works from day one – no in-house development or fine-tuning needed.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white self-start">
                            BOOK A DEMO
                        </Button>
                    </div>
                </div>

                <hr className="border-gray-800 mb-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <p>Hebbia</p>
                        <p>110 Greene Street</p>
                        <p>New York, NY</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Careers</a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="text-sm hover:text-white">Terms of Service</a>
                        <a href="#" className="text-sm hover:text-white">Acceptable Use Policy</a>
                    </div>
                    <p className="text-sm">© Copyright 2024 Hebbia, Inc. All rights reserved.</p>
                </div>
            </div>

            <div className="absolute top-4 left-4">
                <Grid3x3Icon className="h-6 w-6 text-white" />
            </div>
        </footer>
    )
}