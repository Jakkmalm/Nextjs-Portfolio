'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

interface AboutStatsCardProps {
    value: number;
    suffix?: string;
    label: string;
    description: string;
    icon?: LucideIcon;
    delay?: number;
    aos?: string;
    onClick?: () => void;
}

export default function AboutStatsCard({
    value,
    suffix,
    label,
    description,
    icon: Icon,
    delay = 200,
    aos = 'fade-right',
    onClick,
}: AboutStatsCardProps) {
    return (
        <div
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            data-aos={aos}
            data-aos-delay={delay}
            data-aos-duration="1300"
            className="relative group"
        >
            <div className="relative z-10 hover-star-border bg-gradient-to-br from-purple-800/20 via-[#230a27]/20 to-[#053c54]/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300  hover:shadow-2xl h-full flex flex-col justify-between">
                {/* Inre bakgrundsgradient */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />

                {/* Top: ikon + siffra */}
                <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                        {Icon && <Icon className="w-8 h-8 text-white group-hover:text-[#00C6FF]" />}
                    </div>
                    <span
                        className="text-4xl font-bold text-white opacity-100 transition-opacity"
                        data-aos="fade-up-left"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <AnimatedCounter to={value} delay={200} />
                        {suffix && <span className="ml-1">{suffix}</span>}
                    </span>
                </div>

                {/* Label + description */}
                <div>
                    <p
                        className="text-sm uppercase tracking-wider text-gray-300 mb-2 opacity-100 transition-opacity"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {label}
                    </p>
                    <div className="flex items-center justify-between">
                        <p
                            className="text-xs text-gray-400 opacity-100 transition-opacity"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {description}
                        </p>
                        {/* Du kan lägga till en ikon här om du vill */}
                    </div>
                </div>
            </div>
        </div>
    );
}


