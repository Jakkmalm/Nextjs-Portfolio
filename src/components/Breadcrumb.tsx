// // src/components/Breadcrumb.tsx

'use client'
import { useRouter } from 'next/navigation'
import { ArrowLeftToLine, ChevronRight } from '../lib/icons'

interface BreadcrumbProps {
    backHref?: string
    items: { label: string; href?: string }[]
}

export default function Breadcrumb({ backHref = '/', items }: BreadcrumbProps) {
    const router = useRouter()

    return (
        <nav className="flex items-center flex-wrap gap-x-2 mb-8 md:mb-12">
            {/* Tillbaka-knappen */}
            <button
                onClick={() => backHref ? router.push(backHref) : router.back()}
                className="relative overflow-hidden px-4 py-2 text-sm text-white bg-white/10 rounded-full backdrop-blur-sm transition duration-500 group/button inline-flex items-center gap-2 cursor-pointer"
            >
                <ArrowLeftToLine
                    size={16}
                    className="relative z-10 transition-transform duration-500 group-hover/button:-translate-x-1"
                />
                <span className="relative z-10 text-xs lg:text-lg">Tillbaka</span>
                <span className="absolute right-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 ease-in-out group-hover/button:w-full z-0 rounded-full" />
            </button>

            {/* Breadcrumb-text */}
            {items.length > 0 && (
                <div className="flex items-center gap-x-2">
                    <span className="text-white/50 text-xs lg:text-lg">Projekt</span>
                    <span className="text-white/50"><ChevronRight size={12} /></span>
                    <span className="text-purple-400 font-bold text-xs lg:text-lg">{items[items.length - 1].label}</span>
                </div>
            )}
        </nav>
    )
}



