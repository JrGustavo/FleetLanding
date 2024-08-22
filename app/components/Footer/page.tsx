import React from 'react'
import { Button } from '@/components/ui/button'

export default function Footer() {
    return (
        <footer className="bg-primary-700 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Fleet el mejor aliado de las instituciones financieras
                        </h2>
                    </div>
                    <div className="flex flex-col justify-between text-primary-500">
            <p className="mb-4">
            ¿Eres una institución financiera? escríbenos  a&nbsp;&nbsp; 
            <a href="mailto:hola@joinfleet.ai" className="text-primary-500 hover:underline">hola@joinfleet.ai</a>
            </p>
            <Button className="bg-secondary-100 hover:bg-blue-700 text-white self-start">
             Agendar demo
    </Button>
</div>
                </div>

                <hr className="border-gray-800 mb-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <p>Fleet</p>
                        <p>WeWork Calle 127a # 53a-45, Torre 2</p>
                        <p>Bogotá, Colombia</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-white">Linkedin</a>
                        <a href="#" className="hover:text-white">Crunchbase</a>
                        <a href="#" className="hover:text-white">Trabaja con nosotros</a>
                    </div>
                
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="text-sm hover:text-white">Términos y condiciones</a>
                        <a href="#" className="text-sm hover:text-white">Política de privacidad</a>
                        <a href="#" className="text-sm hover:text-white">Política de tratamiento de datos</a>
                    
                    </div>
                    <p className="text-sm">© Copyright 2024 Fleet Technologies, Inc. All rights reserved.</p>
                </div>
            </div>


        </footer>
    )
}