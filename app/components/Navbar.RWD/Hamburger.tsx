'use client';

import React from 'react';
import { FaBars } from "react-icons/fa";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    // SheetDescription,
    // SheetHeader,
    // SheetTitle,
} from "@/components/ui/sheet"

export default function Hamburger({ children }: { children: React.ReactNode }) {
    return (
        <Sheet>
            <SheetTrigger>
                <FaBars className="block h-6 w-6 text-gray-300" aria-hidden="true" />
            </SheetTrigger>

            <SheetContent className="bg-gray-800" side={'top'}>
                {children}
            </SheetContent>
        </Sheet>
    )
}
