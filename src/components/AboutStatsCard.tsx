'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

interface AboutStatsCardProps {
    value: number;
    label: string;
    description: string;
    icon?: LucideIcon;
    delay?: number;
    aos?: string;
    onClick?: () => void; // Ny prop
}

export default function AboutStatsCard({
    value,
    label,
    description,
    icon: Icon,
    delay = 200,
    aos = 'fade-up-right',
    onClick,
}: AboutStatsCardProps) {
    return (
        <div
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}

            className="hover-star-border flex-1 relative z-10 bg-gradient-to-r from-[#230a27]/70 to-[#053c54]/30 backdrop-blur-lg border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
            {/* Inre bakgrundsgradient */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#ffffff20] to-[#ffffff05] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

            <div className="flex items-center justify-between mb-4">
                {Icon ? (
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                ) : (
                    <div className="w-16 h-16" />
                )}

                <span
                    className="text-4xl font-bold text-white"
                    data-aos={aos}
                    data-aos-delay={delay}
                    data-aos-duration="600"
                    data-aos-anchor-placement="top-bottom"
                >
                    <AnimatedCounter to={value} delay={delay} duration={500} />
                </span>
            </div>

            <div>
                <p
                    className="text-sm uppercase tracking-wider text-gray-200 mb-2"
                    data-aos="fade-up"
                    data-aos-delay={delay}
                    data-aos-duration="800"
                    data-aos-anchor-placement="top-bottom"
                >
                    {label}
                </p>
                <div className="flex items-center justify-between">
                    <p
                        className="text-xs text-gray-400"
                        data-aos="fade-up"
                        data-aos-delay={delay}
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
