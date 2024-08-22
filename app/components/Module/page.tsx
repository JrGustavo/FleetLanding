"use client"

import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowBigRightDash, CloudCogIcon, Infinity } from 'lucide-react'

export default function Module() {
  const [isTyping, setIsTyping] = useState(false)
  const [question, setQuestion] = useState("")
  const [response, setResponse] = useState("")

  const handleAsk = () => {
    if (question.trim() !== "") {
      setIsTyping(true)
      setResponse("")
      setTimeout(() => {
        setResponse(
          "Esta segmentación permite ofrecer productos financieros más adecuados a las necesidades específicas de cada grupo, aumentando la probabilidad de aceptación y satisfacción del usuario.\nPuedes descargar tu segmentación en un archivo CSV o verlos en el panel de perfilamiento."
        )
        setIsTyping(false)
      }, 3000) // Simula el tiempo de respuesta
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8 max-w-7xl mx-auto">
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold mb-6">Implemente un módulo en segundos</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <CloudCogIcon className="w-5 h-5" />
                <span>Implementaciones en </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Google Cloud, AWS, Azure
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <ArrowBigRightDash className="w-5 h-5" />
                <span>Escala</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              A millones de usuarios con un solo click
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Infinity className="w-5 h-5" />
                <span>Cumplimiento</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Seguridad para todos sus experimentos
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="lg:w-1/2">
        <Card className="p-4">
          <div className="mb-4 h-64 overflow-y-auto bg-gray-100 rounded p-4">
            {isTyping ? (
              <TypeAnimation
                sequence={[response]}
                wrapper="div"
                speed={50}
                style={{ whiteSpace: 'pre-line' }}
                repeat={0}
              />
            ) : (
              <p className="text-black italic"> Claro, aquí tienes una segmentación de clientes para ofrecer un crédito comercial: 
               Te perfilamos 10k  datos de jóvenes de 25-35 años con ingresos superiores a $3.000.000 COP y buen historial crediticio superior a +700.
        
              
              Puedes descargar tu segmentación en un archivo CSV o ver la información en detalle  en el panel de perfilamiento.</p>
            )}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Crea una segmentación de clientes para ofrecer un crédito"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button onClick={handleAsk} className="bg-blue-500 text-white hover:bg-blue-600">
              Preguntar
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}