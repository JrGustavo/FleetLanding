"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from "next/image"


import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, MenuIcon } from 'lucide-react'

interface NavbarProps {
    logoSrc: string;
}

interface NavItem {
    name: string;
    href?: string;
    subItems?: { name: string; href: string }[];
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems: NavItem[] = [
        {
            name: 'Security',
            subItems: [
                { name: 'Overview', href: '#security-overview' },
                { name: 'Features', href: '#security-features' },
            ]
        },
        {
            name: 'Careers',
            subItems: [
                { name: 'Open Positions', href: '#open-positions' },
                { name: 'Culture', href: '#culture' },
            ]
        },
        { name: 'Customers', href: '#customers' },
        { name: 'Blog', href: '#blog' },
    ]

    const NavItemComponent = ({ item }: { item: NavItem }) => {
        if (item.subItems) {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-foreground/80">
                        {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {item.subItems.map((subItem) => (
                            <DropdownMenuItem key={subItem.name}>
                                <a href={subItem.href} className="w-full">
                                    {subItem.name}
                                </a>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
        return (
            <a
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-foreground/80"
            >
                {item.name}
            </a>
        )
    }

    return (
        <nav className="flex items-center justify-between p-4 bg-background">
            <div className="flex items-center">
                <Image
                     src="/Logo/FleetLogo.jpg"
                     width="500"
                     height="500"
                     alt="Logo"
                     className="h-8 w-auto"
                />
            </div>

            <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                    <NavItemComponent key={item.name} item={item} />
                ))}
                <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90">
                    LOGIN
                </Button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                    <nav className="flex flex-col space-y-4 mt-4">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.subItems ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-foreground/80">
                                            {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {item.subItems.map((subItem) => (
                                                <DropdownMenuItem key={subItem.name}>
                                                    <a href={subItem.href} className="w-full" onClick={() => setIsOpen(false)}>
                                                        {subItem.name}
                                                    </a>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="text-sm font-medium text-foreground hover:text-foreground/80"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        ))}
                        <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90 w-full">
                            LOGIN
                        </Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </nav>
    )
}