"use client";

import React from 'react'
import {
    Home,
    Search,
    Music,
    Heart,
    Settings,
    Plus,
    User,
    Book,
    Pen,
    GalleryHorizontal,
    Eye,
    Code,
    Package,
    Moon,
    Sun
} from "lucide-react"
import { Dock } from './21dev/dock-two'
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

const MainDock = () => {
    const { theme, setTheme } = useTheme()
    const router = useRouter()

    // Add "onClick" that calls router.push() for each route you want.
    const items = [
        {
            icon: Home,
            label: "Home",
            onClick: () => router.push("/")
        },
        {
            icon: Code,
            label: "Work",
            onClick: () => router.push("/work")
        },
        {
            icon: Pen,
            label: "Blogs",
            onClick: () => router.push("/blog")
        },
        {
            icon: Book,
            label: "Books",
            onClick: () => router.push("/book")
        },
        {
            icon: GalleryHorizontal,
            label: "Image Gallery",
            onClick: () => router.push("/gallery")
        },
        {
            icon: theme === "light" ? Moon : Sun,
            label: "Toggle Theme",
            onClick: () => {
                setTheme(theme === "light" ? "dark" : "light")
            }
        },
    ]

    return (
        <div className='fixed bottom-0 left-0 right-0 z-20 md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-4'>
            <Dock items={items} className='w-full' />
        </div>
    )
}

export default MainDock
