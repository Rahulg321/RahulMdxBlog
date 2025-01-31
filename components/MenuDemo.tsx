"use client"

import { Menu as MenuIcon, X, Home, Mail, User, Settings, Moon, Sun, Code, Code2, Server, Brackets, Pen, GalleryHorizontal, Eye } from "lucide-react"
import { MenuItem, MenuContainer } from "./21dev/fluid-menu"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

// A fluid circular menu that elegantly expands to reveal navigation items with smooth icon transitions
export function MenuDemo() {

    const { theme, setTheme } = useTheme()
    const router = useRouter()

    return (
        <div className="">
            <div className="fixed sm:hidden z-20 top-4 left-2">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-transparent dark:from-gray-100/10 blur-3xl -z-10 rounded-full" />
                <MenuContainer>
                    <MenuItem
                        icon={
                            <div className="relative w-4 h-4">
                                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                                    <MenuIcon size={16} strokeWidth={1.5} />
                                </div>
                                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                                    <X size={16} strokeWidth={1.5} />
                                </div>
                            </div>
                        }
                    />
                    <MenuItem icon={<Home size={16} strokeWidth={2} />} onClick={() => {
                        router.push("/")
                    }} />
                    <MenuItem icon={<Code size={16} strokeWidth={1.5} />} onClick={() => {
                        router.push("/work")
                    }} />
                    <MenuItem icon={<Brackets size={16} strokeWidth={1.5} />} onClick={() => {
                        router.push("/project")
                    }} />
                    <MenuItem icon={<Pen size={16} strokeWidth={1.5} />} onClick={() => {
                        router.push("/blog")
                    }} />
                    <MenuItem icon={<GalleryHorizontal size={16} strokeWidth={1.5} onClick={() => {
                        router.push("/")
                    }} />} />
                    <MenuItem icon={<Eye size={16} strokeWidth={1.5} onClick={() => {
                        router.push("/")
                    }} />} />
                    {
                        theme === "dark" ? <MenuItem icon={<Sun size={16} strokeWidth={1.5} />} onClick={() => {
                            setTheme("light")
                        }} /> : <MenuItem icon={<Moon size={16} strokeWidth={1.5} />} onClick={() => {
                            setTheme("dark")
                        }} />
                    }

                </MenuContainer>
            </div>
        </div>
    )
}
