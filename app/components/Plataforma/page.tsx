"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const sections = [
    'Bancos',
    'ADVISORY',
    'LEGAL',
    'CREDIT',
    'REAL ESTATE',
    'CORPORATE',
    'CONSULTING'
]

const sectionData = {
    'Bancos': [
        { id: 1, document: 'Portfolio Analysis', date: 'Jan 15, 2024', type: 'Financial', risks: 'Market volatility impact on asset allocation', considerations: 'Emerging market opportunities', highlights: 'Outperformed benchmark by 3.5%' },
        { id: 2, document: 'Fund Performance Report', date: 'Feb 1, 2024', type: 'Performance', risks: 'Underperformance in tech sector', considerations: 'Shift towards value stocks', highlights: 'Consistent alpha generation in fixed income' },
    ],
    'ADVISORY': [
        { id: 1, document: 'M&A Strategy Deck', date: 'Mar 10, 2024', type: 'Strategic', risks: 'Integration challenges post-merger', considerations: 'Synergy potential in target markets', highlights: 'Identified $50M in cost savings' },
        { id: 2, document: 'IPO Readiness Assessment', date: 'Apr 5, 2024', type: 'Financial', risks: 'Market timing concerns', considerations: 'Competitive landscape analysis', highlights: 'Valuation range estimate: $2-2.5B' },
    ],
    'LEGAL': [
        { id: 1, document: 'Regulatory Compliance Review', date: 'Feb 20, 2024', type: 'Compliance', risks: 'Potential fines for non-compliance', considerations: 'Upcoming regulatory changes', highlights: 'No major violations found' },
        { id: 2, document: 'Intellectual Property Audit', date: 'Mar 15, 2024', type: 'Legal', risks: 'Patent infringement claims', considerations: 'Strengthening IP portfolio', highlights: '5 new patent applications filed' },
    ],
    'CREDIT': [
        { id: 1, document: 'Loan Portfolio Analysis', date: 'Jan 30, 2024', type: 'Financial', risks: 'Increasing default rates in retail sector', considerations: 'Expansion of SME lending', highlights: 'NPL ratio improved by 0.5%' },
        { id: 2, document: 'Credit Risk Model Update', date: 'Feb 28, 2024', type: 'Risk', risks: 'Model accuracy in volatile markets', considerations: 'Integration of alternative data', highlights: 'Predictive power increased by 10%' },
    ],
    'REAL ESTATE': [
        { id: 1, document: 'Market Trend Analysis', date: 'Apr 1, 2024', type: 'Market', risks: 'Oversupply in commercial real estate', considerations: 'Growing demand for sustainable buildings', highlights: 'Identified 3 high-potential submarkets' },
        { id: 2, document: 'Property Valuation Report', date: 'Apr 15, 2024', type: 'Financial', risks: 'Interest rate impact on cap rates', considerations: 'Redevelopment opportunities', highlights: '15% YoY value appreciation in portfolio' },
    ],
    'CORPORATE': [
        { id: 1, document: 'Strategic Plan 2025', date: 'Mar 1, 2024', type: 'Strategic', risks: 'Execution challenges in new markets', considerations: 'Digital transformation initiatives', highlights: 'Target: 20% revenue growth over 3 years' },
        { id: 2, document: 'ESG Performance Report', date: 'Mar 20, 2024', type: 'Sustainability', risks: 'Reputational risks from supply chain', considerations: 'Increasing investor focus on ESG', highlights: 'Carbon neutrality achieved in operations' },
    ],
    'CONSULTING': [
        { id: 1, document: 'Operational Efficiency Review', date: 'Feb 10, 2024', type: 'Operations', risks: 'Employee resistance to change', considerations: 'AI/ML implementation opportunities', highlights: 'Identified 30% potential cost reduction' },
        { id: 2, document: 'Customer Experience Strategy', date: 'Mar 5, 2024', type: 'Strategic', risks: 'Tech implementation delays', considerations: 'Omnichannel integration', highlights: 'NPS improvement target: +15 points' },
    ],
}

export default function Plataforma() {
    const [activeSection, setActiveSection] = useState(0)

    return (
        <div className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
                    1000+ live use cases, driving
                    <br />
                    real business outcomes
                </h2>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {sections.map((section, index) => (
                        <Button
                            key={section}
                            variant={index === activeSection ? "default" : "outline"}
                            onClick={() => setActiveSection(index)}
                        >
                            {section}
                        </Button>
                    ))}
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Document</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Document Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Investment Risks</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Market Considerations</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Investment Highlights</th>
                        </tr>
                        </thead>
                        <tbody className="bg-background divide-y divide-border">
                        {sectionData[sections[activeSection]].map((row) => (
                            <tr key={row.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{row.document}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{row.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        row.type === 'Financial' ? 'bg-blue-100 text-blue-800' :
                            row.type === 'Strategic' ? 'bg-purple-100 text-purple-800' :
                                row.type === 'Legal' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                    }`}>
                      {row.type}
                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm">{row.risks}</td>
                                <td className="px-6 py-4 text-sm">{row.considerations}</td>
                                <td className="px-6 py-4 text-sm">{row.highlights}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}