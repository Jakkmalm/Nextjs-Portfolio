// // src/components/Breadcrumb.tsx
// 'use client';

// type BreadcrumbItem = {
//     label: string;
//     href?: string;
// };

// type BreadcrumbProps = {
//     onBack: () => void;
//     items: BreadcrumbItem[];
// };

// export default function Breadcrumb({ onBack, items }: BreadcrumbProps) {
//     return (
//         <nav className="flex items-center space-x-2 mb-8">
//             <button onClick={onBack} className="text-blue-500">&larr;</button>
//             {items.map((it, i) => (
//                 <span key={i} className={i < items.length - 1 ? 'cursor-pointer text-blue-500' : 'font-semibold'}>
//                     {it.href ? <a href={it.href}>{it.label}</a> : it.label}
//                 </span>
//             ))}
//         </nav>
//     );
// }


// TEST MED PROJECTS/SLUG PAGE:TSX SOM SERVERKOMPONENT:

'use client'
import { useRouter } from 'next/navigation'

interface BreadcrumbProps {
    backHref?: string      // alternativt använd bara back()
    items: { label: string; href?: string }[]
}

export default function Breadcrumb({ backHref = '/', items }: BreadcrumbProps) {
    const router = useRouter()

    return (
        <nav className="flex items-center space-x-2 mb-8 md:space-x-4 md:mb-12">
            <button
                onClick={() => backHref ? router.push(backHref) : router.back()}
                className="text-white text-sm hover:underline cursor-pointer"
            >
                ← Tillbaka
            </button>
            {items.map((it, i) => (
                <span
                    key={i}
                    className={i < items.length - 1 ? 'text-white text-sm hover:underline cursor-pointer' : 'text-purple-400 font-semibold'}
                    onClick={() => it.href && router.push(it.href)}
                >
                    {it.label}
                </span>
            ))}
        </nav>
    )
}
