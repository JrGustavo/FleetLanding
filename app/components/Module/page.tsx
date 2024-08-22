"use client"

import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FileText, Hand, Infinity } from 'lucide-react'

export default function Module() {
  const [isTyping, setIsTyping] = useState(false)
  const [question, setQuestion] = useState("")

  const handleAsk = () => {
    if (question.trim() !== "") {
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 5000) // Simula el tiempo de respuesta
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8 max-w-7xl mx-auto">
      <div className="lg:w-1/2">
        <h2 className="text-sm text-gray-600 mb-2">Our platform</h2>
        <h1 className="text-4xl font-bold mb-6">Your new legal workspace.</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Aggregate information</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Get comprehensive legal information from various sources in one place.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Hand className="w-5 h-5" />
                <span>Source within reach</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Get instant answers to your queries, always with highlighted citations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Infinity className="w-5 h-5" />
                <span>Endless accessibility</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Access your legal workspace anytime, anywhere, with unlimited potential.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="lg:w-1/2">
        <Card className="p-4">
          <div className="mb-4 h-64 overflow-y-auto bg-gray-100 rounded p-4">
            {isTyping ? (
              <TypeAnimation
                sequence={[
                  'The EU AI Act can apply to American companies in certain circumstances:',
                  1000,
                  'The EU AI Act can apply to American companies in certain circumstances:\n\n1. If they offer AI systems or their outputs in the EU market.\n2. If the output produced by the AI system is used in the EU.\n3. If they have a physical presence in the EU.',
                  1000,
                ]}
                wrapper="div"
                speed={50}
                style={{ whiteSpace: 'pre-line' }}
                repeat={0}
              />
            ) : (
              <p className="text-gray-500 italic">Ask a question to see the response here...</p>
            )}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Does the EU AI Act apply to American companies?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button onClick={handleAsk}>Ask</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}